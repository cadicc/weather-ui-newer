/** @jsxImportSource @emotion/react */
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
    hisWeatherPrimaryColor,
    currentWeatherSpaceCss,
} from '~/common/styles.ts';

const CurrentWeather = () => {
    const { currentWeatherRender, location } = useAxiosCurrent();
    let checkObj = Object.keys(currentWeatherRender).length === 0;
    if (checkObj === false) {
        return (
            <div>
                <h2 css={hisWeatherPrimaryColor}>Weather</h2>
                <div css={backgroundFavoriteWeatherCss}>
                    <div css={backgroundPositionFavoriteWeatherCss}>
                        <div css={paddingFavoriteWeatherCss}>
                            <span
                                css={fontSizeLocationFavoriteWeatherCss}
                            >{`${location.name}, ${location.country}`}</span>
                            <div css={conditionFavoriteWeatherCss}>
                                <div css={maxWidthFavoriteWeatherCss}>
                                    <div>
                                        <span css={currentTempWeatherCss}>{currentWeatherRender.temp_c}</span>
                                        <span>
                                            <CircleOutlinedIcon css={circleIconFavoriteWeatherCss} />
                                        </span>
                                    </div>
                                    <div>
                                        <p css={textConditionFavoriteWeatherCss}>
                                            {currentWeatherRender.condition.text}
                                        </p>
                                    </div>
                                </div>
                                <div css={fontSizeLocationFavoriteWeatherCss}>
                                    <div>
                                        <span>
                                            <DeviceThermostatIcon css={thermostatIconFavoriteWeatherCss} />
                                        </span>
                                        <span css={currentWeatherSpaceCss}>{currentWeatherRender.feelslike_c}</span>
                                        <span>
                                            <CircleOutlinedIcon css={circleIconSmallerFavoriteWeatherCss} />
                                        </span>
                                    </div>
                                    <div css={currentWeatherSpaceCss}>
                                        <span>
                                            <RemoveRedEyeIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${currentWeatherRender.vis_km} km`}</span>
                                    </div>
                                </div>
                                <div css={fontSizeLocationFavoriteWeatherCss}>
                                    <div>
                                        <span>
                                            <AirIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${currentWeatherRender.wind_kph} km/h`}</span>
                                    </div>
                                    <div>
                                        <span>
                                            <InvertColorsIcon css={iconSmallerFavoriteWeatherCss} />
                                        </span>
                                        <span>{`${currentWeatherRender.humidity} %`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        <></>;
    }
};
export default CurrentWeather;
