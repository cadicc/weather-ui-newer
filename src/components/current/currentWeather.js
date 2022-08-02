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

const CurrentWeather = () => {
    const { current, location } = useAxiosCurrent();
    let checkObj = Object.keys(current).length === 0;

    if (checkObj === false) {
        return (
            <div>
                <div css={currentWeatherCss}>
                    <div>
                        <div css={currentWeatherAlignCss}>
                            <p>{`${location.name}, ${location.country}`}</p>
                            <div css={currentWeatherTempFielCss}>
                                <img alt="icon-weather" src={current.condition.icon}></img>
                                <p id="temp_c" css={currentWeatherTempCCss}>
                                    {current.temp_c}
                                </p>
                                <FontAwesomeIcon icon={faCircle} id="temp-icon" />
                            </div>
                            <p id="condition" css={currentWeatherSpaceCss}>
                                {current.condition.text}
                            </p>
                            <p id="Updated" css={currentWeatherSpaceCss}>
                                {`Updated as of ${moment(current.last_updated, 'YYYY-MM-DD hh:mm').format('hh:mm A')}`}
                            </p>
                            <div css={currentWeatherLineCss}>
                                <span css={currentWeatherFeelLikeCss}>
                                    <p id="feel_like">{`Feels Like ${current.feelslike_c} `}</p>
                                    <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconCss} />
                                </span>
                                <div css={currentWeatherWindCss}>
                                    <span>
                                        Wind <AirIcon fontSize="small" />
                                    </span>
                                    <span>
                                        <p id="wind" css={currentWeatherTextCss}>
                                            {`${current.wind_kph} km/h`}
                                        </p>
                                    </span>
                                </div>
                                <p id="visibility" css={currentWeatherTextCss}>
                                    {`Visibility ${current.vis_km} km`}
                                </p>
                            </div>
                            <div css={currentWeatherLineCss}>
                                <p id="barometer" css={currentWeatherTextCss}>
                                    {`Barometer ${current.pressure_mb} mb`}
                                </p>
                                <p id="humidity" css={currentWeatherTextCss}>
                                    {`Humidity ${current.humidity}%`}
                                </p>
                                <p id="precip" css={currentWeatherTextCss}>
                                    {`Precipitation ${current.precip_mm} mm`}
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
