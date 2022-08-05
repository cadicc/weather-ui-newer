/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import { get_hour, SELECT_HOUR } from '~/features/Hourly';
import { set_api } from '~/features/DailyWeather';
import { set_daily } from '~/features/activeDaily';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
    dailyCss,
    dailyItemActiveCss,
    dailyItemCss,
    dailyItemDescriptionCss,
    dailyItemTempMaxCss,
    dailyItemCircleIconBiggerCss,
    dailyItemTempMinCss,
    dailyItemCircleIconSmallerCss,
} from '~/common/styles.ts';

const DailyWeather = (props) => {
    const dispatch = useDispatch();
    const activeDaily = useSelector((state) => state.activeDaily.daily);

    return (
        <div>
            <h2>Daily</h2>
            <div css={dailyCss}>
                {props.onForecastWeather &&
                    props.onForecastWeather.map((fore, index) => (
                        <div
                            key={index}
                            css={activeDaily === index ? dailyItemActiveCss : dailyItemCss}
                            onClick={() => {
                                dispatch(get_hour(index));
                                dispatch(set_api(index));
                                dispatch(set_daily(index));
                                dispatch(SELECT_HOUR(index));
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
                    ))}
            </div>
        </div>
    );
};
export default DailyWeather;

// /** @jsxImportSource @emotion/react */
// import { useDispatch, useSelector } from 'react-redux';
// import { dailyCss } from '~/common/styles.ts';
// import Day from './Day';
// import React, { useState } from 'react';

// const DailyWeather = (props) => {
//     const [nameOfDay, setNameOfDay] = useState()

//     const funcSetDay= (name) => {
//         console.log(name)
//         setNameOfDay(name)
//     }

//     return (
//         <div>
//             <h2>Daily</h2>
//             <div css={dailyCss}>
//                 {props.onForecastWeather &&
//                     props.onForecastWeather.map((fore, index) => (
//                         <React.Fragment key={index}>
//                             <Day fore={fore} index={index} onclick={funcSetDay}/>
//                         </React.Fragment>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default DailyWeather;
