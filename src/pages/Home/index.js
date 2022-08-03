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
    TYPE_MEDIUM,
    TYPE_SMALL,
} from '~/common/day';
import useAxiosCurrent from '~/service/currentApi';
import useAxios from '~/service/forecast';
import { backgroundHomeColorLightCss, backgroundHomeColorDarkCss } from './styles.ts';
import CurrentWeather from '~/components/current/currentWeather';
import DailyWeather from '~/components/Daily/index';
import HourlyWeather from '~/components/Hourly/index';
import DayDetail from '~/components/DayDetail/index';
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
    const { currentWeatherRender, condition, location } = useAxiosCurrent();
    const { data } = useAxios();
    const weatherRef = useRef();
    const weatherRefExtra = useRef();
    const weatherRefLast = useRef();

    const handleBackgroundWeather = useCallback(() => {
        switch (condition) {
            case condition === CLEAR:
                return clearWeather;
            case condition === SUNNY:
                return sunnyWeather;
            case condition === LIGHT_RAIN:
                return lightRainWeather;
            case condition === MIST:
                return mistWeather;
            case condition === PARTLY_CLOUDY:
                return sunnyWeather;
            case condition === HEAVY_RAIN_AND_THUNDER:
                return partlyCloudyWeather;
            case condition === PATCHY_RAIN_AND_THUNDER:
                return cloudThunderWeather;
            case condition === THUNDERY_OUTBREAKS_POSSIBLE:
                return cloudThunderWeather;
            default:
                return sunnyWeather;
        }
    }, [condition]);

    const handleBackgroundWeatherFilter = useCallback(() => {
        switch (condition) {
            case condition === PARTLY_CLOUDY:
                return partlyCloudyWeather;
            case condition === LIGHT_RAIN:
                return rainWeather;
            case condition === HEAVY_RAIN_AND_THUNDER:
                return thunderWeather;
            case condition === PATCHY_RAIN_AND_THUNDER:
                return thunderWeather;
            default:
                break;
        }
    }, [condition]);

    return (
        <div
            ref={weatherRef}
            css={
                (Number(moment().format('h')) >= 1 &&
                    Number(moment().format('h')) < 7 &&
                    moment().format('a') === 'pm') ||
                (Number(moment().format('h')) > 6 && moment().format('a') === 'am')
                    ? backgroundHomeColorLightCss
                    : backgroundHomeColorDarkCss
            }
        >
            <div css={handleBackgroundWeather()}>
                <div ref={weatherRefExtra} css={handleBackgroundWeatherFilter()}>
                    <div ref={weatherRefLast}>
                        <Container>
                            <CurrentWeather
                                onCurrent={currentWeatherRender}
                                hasLocation={location.name}
                                hasCountry={location.country}
                                hasTempC={currentWeatherRender.temp_c}
                                hasLastUpdate={currentWeatherRender.last_updated}
                                hasFeelLike={currentWeatherRender.feelslike_c}
                                hasWind={currentWeatherRender.wind_kph}
                                hasVis={currentWeatherRender.vis_km}
                                hasPressure={currentWeatherRender.pressure_mb}
                                hasHumidity={currentWeatherRender.humidity}
                                hasPrecip_mm={currentWeatherRender.precip_mm}
                                type={TYPE_BIG}
                            />
                            <DailyWeather onForecastWeather={data} type={TYPE_MEDIUM} />
                            <HourlyWeather type={TYPE_SMALL} onForecastWeatherHourly={data} />
                            <DayDetail onForecastWeatherDetail={data} />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
