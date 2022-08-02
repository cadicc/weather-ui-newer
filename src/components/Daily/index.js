/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import useAxios from '~/service/forecast';
import { get_hour } from '~/features/Hourly';
import { set_api } from '~/features/DailyWeather';
import { set_daily } from '~/features/activeDaily';
import HourlyWeather from '~/components/Hourly/index';
import DayDetail from '~/components/DayDetail/index';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { TODAY } from '~/common/day';
import {
    dailyCss,
    dailyItemActiveCss,
    dailyItemCss,
    dailyItemDescriptionCss,
    dailyItemTempMaxCss,
    dailyItemCircleIconCss,
    dailyItemTempMinCss,
    dailyItemCircleIconSmallerCss,
} from './styles.ts';

const DailyWeather = () => {
    const [selectDaily, setSelectDaily] = useState(TODAY);
    const dispatch = useDispatch();
    const activeDaily = useSelector((state) => state.activeDaily.daily);
    const { data } = useAxios();

    return (
        <div>
            <h2>Daily</h2>
            <div css={dailyCss}>
                {data &&
                    data.map((fore, index) => (
                        <div
                            key={index}
                            css={activeDaily === index ? dailyItemActiveCss : dailyItemCss}
                            onClick={() => {
                                dispatch(get_hour(index));
                                dispatch(set_api(index));
                                dispatch(set_daily(index));
                                setSelectDaily(index);
                            }}
                            id={`daily-${index}`}
                        >
                            <ul css={dailyItemDescriptionCss}>
                                <li>{moment(fore.date, 'YYYY-MM-DD').format('ddd D')}</li>
                                <li>
                                    <img src={fore.day.condition.icon} alt="icon-forecast"></img>
                                </li>
                                <li>
                                    <span css={dailyItemTempMaxCss}>
                                        {fore.day.maxtemp_c}
                                        <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconCss} />
                                    </span>
                                    <span css={dailyItemTempMinCss}>
                                        {fore.day.mintemp_c}
                                        <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconSmallerCss} />
                                    </span>
                                </li>
                                <li>{fore.day.condition.text}</li>
                            </ul>
                        </div>
                    ))}
            </div>
            <HourlyWeather selectHourlyWeather={selectDaily} />
            <DayDetail />
        </div>
    );
};
export default DailyWeather;
