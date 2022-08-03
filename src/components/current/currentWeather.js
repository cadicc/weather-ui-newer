/** @jsxImportSource @emotion/react */
import * as moment from 'moment';
// import { css } from '@emotion/react';
import useAxiosCurrent from '~/service/currentApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import AirIcon from '@mui/icons-material/Air';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
    currentWeatherCss,
    currentWeatherAlignCss,
    currentWeatherTempFielCss,
    currentWeatherTempCCss,
    currentWeatherSpaceCss,
    currentWeatherLineCss,
    currentWeatherFeelLikeCss,
    currentWeatherWindCss,
    currentWeatherTextCss,
    dailyItemCircleIconCss,
} from './styles.ts';
import { useEffect } from 'react';

const CurrentWeather = (props) => {
    // const { current, location } = useAxiosCurrent();
    let checkObj = Object.keys(props.onCurrent).length === 0;
    console.log(props.type);

    if (checkObj === false) {
        return (
            <div>
                <div css={currentWeatherCss}>
                    <div>
                        <div css={currentWeatherAlignCss}>
                            <p>{`${props.hasLocation}, ${props.hasCountry}`}</p>
                            <div css={currentWeatherTempFielCss}>
                                <img alt="icon-weather" src={props.onCurrent.condition.icon}></img>
                                <p id="temp_c" css={currentWeatherTempCCss}>
                                    {props.hasTempC}
                                </p>
                                <FontAwesomeIcon icon={faCircle} id="temp-icon" />
                            </div>
                            <p id="condition" css={currentWeatherSpaceCss}>
                                {props.onCurrent.condition.text}
                            </p>
                            <p id="Updated" css={currentWeatherSpaceCss}>
                                {`Updated as of ${moment(props.hasLastUpdate, 'YYYY-MM-DD hh:mm').format('hh:mm A')}`}
                            </p>
                            <div css={currentWeatherLineCss}>
                                <span css={currentWeatherFeelLikeCss}>
                                    <p id="feel_like">{`Feels Like ${props.hasFeelLike} `}</p>
                                    <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconCss} />
                                </span>
                                <div css={currentWeatherWindCss}>
                                    <span>
                                        Wind <AirIcon fontSize="small" />
                                    </span>
                                    <span>
                                        <p id="wind" css={currentWeatherTextCss}>
                                            {`${props.hasWind} km/h`}
                                        </p>
                                    </span>
                                </div>
                                <p id="visibility" css={currentWeatherTextCss}>
                                    {`Visibility ${props.hasVis} km`}
                                </p>
                            </div>
                            <div css={currentWeatherLineCss}>
                                <p id="barometer" css={currentWeatherTextCss}>
                                    {`Barometer ${props.hasPressure} mb`}
                                </p>
                                <p id="humidity" css={currentWeatherTextCss}>
                                    {`Humidity ${props.hasHumidity}%`}
                                </p>
                                <p id="precip" css={currentWeatherTextCss}>
                                    {`Precipitation ${props.hasPrecip_mm} mm`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CurrentWeather;
