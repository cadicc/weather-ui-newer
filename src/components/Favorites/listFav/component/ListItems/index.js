/** @jsxImportSource @emotion/react */
import {
    favWeatherCurrentPad,
    favWeatherCurrentDisplay,
    favWeatherItemWidth,
    favWeatherTempCItem,
    circleIconFavoriteWeatherCss,
    textConditionFavoriteWeatherCss,
    favWeatherItemField,
    favWeatherMargin,
    thermostatIconFavoriteWeatherCss,
    currentWeatherSpaceCss,
    circleIconSmallerFavoriteWeatherCss,
    iconSmallerFavoriteWeatherCss,
    favWeatherCurrentFont,
} from '~/common/styles.ts';
import AirIcon from '@mui/icons-material/Air';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const ListItemsFavWeather = (props) => {
    return (
        <div css={favWeatherCurrentPad}>
            <span
                css={favWeatherCurrentFont}
            >{`${props.hasItem.location.name}, ${props.hasItem.location.country}`}</span>
            <div css={favWeatherCurrentDisplay}>
                <div css={favWeatherItemWidth}>
                    <div>
                        <span css={favWeatherTempCItem}>{props.hasItem.current.temp_c}</span>
                        <span>
                            <CircleOutlinedIcon css={circleIconFavoriteWeatherCss} />
                        </span>
                    </div>
                    <div>
                        <p css={textConditionFavoriteWeatherCss}>{props.hasItem.current.condition.text}</p>
                    </div>
                </div>
                <div css={favWeatherItemField}>
                    <div css={favWeatherMargin}>
                        <div>
                            <span>
                                <DeviceThermostatIcon css={thermostatIconFavoriteWeatherCss} />
                            </span>
                            <span css={currentWeatherSpaceCss}>{props.hasItem.current.feelslike_c}</span>
                            <span>
                                <CircleOutlinedIcon css={circleIconSmallerFavoriteWeatherCss} />
                            </span>
                        </div>
                        <div css={currentWeatherSpaceCss}>
                            <span>
                                <RemoveRedEyeIcon css={iconSmallerFavoriteWeatherCss} />
                            </span>
                            <span>{`${props.hasItem.current.vis_km} km`}</span>
                        </div>
                    </div>
                    <div css={favWeatherMargin}>
                        <div>
                            <span>
                                <AirIcon css={thermostatIconFavoriteWeatherCss} />
                            </span>
                            <span>{`${props.hasItem.current.wind_kph} km/h`}</span>
                        </div>
                        <div css={currentWeatherSpaceCss}>
                            <span>
                                <InvertColorsIcon css={thermostatIconFavoriteWeatherCss} />
                            </span>
                            <span>{`${props.hasItem.current.humidity} %`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ListItemsFavWeather;
