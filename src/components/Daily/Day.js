/** @jsxImportSource @emotion/react */
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import * as moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    dailyItemActiveCss,
    dailyItemCircleIconBiggerCss,
    dailyItemCircleIconSmallerCss,
    dailyItemCss,
    dailyItemDescriptionCss,
    dailyItemTempMaxCss,
    dailyItemTempMinCss,
} from '~/common/styles.ts';
import { set_daily } from '~/features/activeDaily';
import { set_api } from '~/features/DailyWeather';
import { get_hour, SELECT_HOUR } from '~/features/Hourly';

Day.propTypes = {
    fore: Object,
    index: Number,
    onclick: Function,
};

function Day(props) {
    const { fore, index } = props;
    const dispatch = useDispatch();
    const activeDaily = useSelector((state) => state.activeDaily.daily);
    console.log(moment(fore.date, 'YYYY-MM-DD').format('ddd D'), new Date().getTime());

    return (
        <div
            key={index}
            css={activeDaily === index ? dailyItemActiveCss : dailyItemCss}
            onClick={() => {
                dispatch(get_hour(index));
                dispatch(set_api(index));
                dispatch(set_daily(index));
                dispatch(SELECT_HOUR(index));
                props.onclick(moment(fore.date, 'YYYY-MM-DD').format('ddd D'));
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
                        <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconBiggerCss} />
                    </span>
                    <span css={dailyItemTempMinCss}>
                        {fore.day.mintemp_c}
                        <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconSmallerCss} />
                    </span>
                </li>
                <li>{fore.day.condition.text}</li>
            </ul>
        </div>
    );
}

function moviePropsAreEqual(prevMovie, nextMovie) {
    return prevMovie.index === nextMovie.index;
}

export default React.memo(Day, moviePropsAreEqual);
