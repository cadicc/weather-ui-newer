/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import * as moment from 'moment';
import {
    SUNNY,
    CLEAR,
    MIST,
    LIGHT_RAIN,
    PARTLY_CLOUDY,
    HEAVY_RAIN_AND_THUNDER,
    PATCHY_RAIN_AND_THUNDER,
    THUNDERY_OUTBREAKS_POSSIBLE,
    TYPE_BIG,
} from '~/common/day';
import useAxiosCurrent from '~/service/currentApi';
import useAxios from '~/service/forecast';
import { backgroundHomeColorLightCss, backgroundHomeColorDarkCss } from './styles.ts';
import CurrentWeather from '~/components/current/currentWeather';
import DailyWeather from '~/components/Daily/index';
import {
    sunnyWeather,
    clearWeather,
    mistWeather,
    lightRainWeather,
    partlyCloudyWeather,
    rainWeather,
    thunderWeather,
    cloudThunderWeather,
} from '~/common/styles.ts';

const Forecast = (props) => {
    const { current, condition, location } = useAxiosCurrent();
    const { data } = useAxios();
    const weatherRef = useRef();
    const weatherRefExtra = useRef();
    const weatherRefLast = useRef();
    console.log(data);

    const handleBackgroundWeather = useCallback(() => {
        switch (condition) {
            case condition === CLEAR:
                return clearWeather;
                break;
            case condition === SUNNY:
                return sunnyWeather;
                break;
            case condition === LIGHT_RAIN:
                return lightRainWeather;
                break;
            case condition === MIST:
                return mistWeather;
                break;
            case condition === PARTLY_CLOUDY:
                return sunnyWeather;
                break;
            case condition === HEAVY_RAIN_AND_THUNDER:
                return partlyCloudyWeather;
                break;
            case condition === PATCHY_RAIN_AND_THUNDER:
                return cloudThunderWeather;
                break;
            case condition === THUNDERY_OUTBREAKS_POSSIBLE:
                return cloudThunderWeather;
                break;
            default:
                return sunnyWeather;
                break;
        }
    }, [condition]);

    const handleBackgroundWeatherFilter = useCallback(() => {
        switch (condition) {
            case condition === PARTLY_CLOUDY:
                return partlyCloudyWeather;
                break;
            case condition === LIGHT_RAIN:
                return rainWeather;
                break;
            case condition === HEAVY_RAIN_AND_THUNDER:
                return thunderWeather;
                break;
            case condition === PATCHY_RAIN_AND_THUNDER:
                return thunderWeather;
                break;
            default:
                break;
        }
    }, [condition]);

    return (
        <div
            ref={weatherRef}
            css={
                (parseInt(moment().format('h')) >= 1 &&
                    parseInt(moment().format('h')) < 7 &&
                    moment().format('a') === 'pm') ||
                (parseInt(moment().format('h')) > 6 && moment().format('a') === 'am')
                    ? backgroundHomeColorLightCss
                    : backgroundHomeColorDarkCss
            }
        >
            <div css={handleBackgroundWeather()}>
                <div ref={weatherRefExtra} css={handleBackgroundWeatherFilter()}>
                    <div ref={weatherRefLast}>
                        <Container>
                            <CurrentWeather
                                onCurrent={current}
                                hasLocation={location.name}
                                hasCountry={location.country}
                                // hasIcon={current.condition.icon}
                                hasTempC={current.temp_c}
                                // hasConditionText={current.condition.text}
                                hasLastUpdate={current.last_updated}
                                hasFeelLike={current.feelslike_c}
                                hasWind={current.wind_kph}
                                hasVis={current.vis_km}
                                hasPressure={current.pressure_mb}
                                hasHumidity={current.humidity}
                                hasPrecip_mm={current.precip_mm}
                                type={TYPE_BIG}
                            />
                            <DailyWeather />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
