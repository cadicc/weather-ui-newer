/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';
import useAxiosCurrent from '~/service/currentApi';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
    backgroundFavoriteWeatherCss,
    backgroundPositionFavoriteWeatherCss,
    paddingFavoriteWeatherCss,
    fontSizeLocationFavoriteWeatherCss,
    conditionFavoriteWeatherCss,
    maxWidthFavoriteWeatherCss,
    currentTempWeatherCss,
    circleIconFavoriteWeatherCss,
    textConditionFavoriteWeatherCss,
    thermostatIconFavoriteWeatherCss,
    circleIconSmallerFavoriteWeatherCss,
    iconSmallerFavoriteWeatherCss,
} from './styles.ts';

const CurrentWeather = () => {
    const { current, location } = useAxiosCurrent();
    let checkObj = Object.keys(current).length === 0;
    if (checkObj === false) {
        return (
            <div>
                <h2
                    className={css`
                        color: #ffffff;
                    `}
                >
                    Weather
                </h2>
                <div css={backgroundFavoriteWeatherCss}>
                    <div css={backgroundPositionFavoriteWeatherCss}>
                        <div css={paddingFavoriteWeatherCss}>
                            <span
                                css={fontSizeLocationFavoriteWeatherCss}
                            >{`${location.name}, ${location.country}`}</span>
                            <div css={conditionFavoriteWeatherCss}>
                                <div css={maxWidthFavoriteWeatherCss}>
                                    <div>
                                        <span css={currentTempWeatherCss}>{current.temp_c}</span>
                                        <span>
                                            <CircleOutlinedIcon css={circleIconFavoriteWeatherCss} />
                                        </span>
                                    </div>
                                    <div>
                                        <p css={textConditionFavoriteWeatherCss}>{current.condition.text}</p>
                                    </div>
                                </div>
                                <div css={fontSizeLocationFavoriteWeatherCss}>
                                    <div>
                                        <span>
                                            <DeviceThermostatIcon css={thermostatIconFavoriteWeatherCss} />
                                        </span>
                                        <span
                                            className={css`
                                                margin: 5px 0;
                                            `}
                                        >
                                            {current.feelslike_c}
                                        </span>
                                        <span>
                                            <CircleOutlinedIcon css={circleIconSmallerFavoriteWeatherCss} />
                                        </span>
                                    </div>
                                    <div
                                        className={css`
                                            margin: 5px 0;
                                        `}
                                    >
                                        <span>
                                            <RemoveRedEyeIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${current.vis_km} km`}</span>
                                    </div>
                                </div>
                                <div css={fontSizeLocationFavoriteWeatherCss}>
                                    <div>
                                        <span>
                                            <AirIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${current.wind_kph} km/h`}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <InvertColorsIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${current.humidity} %`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default CurrentWeather;
