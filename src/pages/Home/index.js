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
} from '~/common/day';
import useAxiosCurrent from '~/service/currentApi';
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
    const { current, condition } = useAxiosCurrent();
    const weatherRef = useRef();
    const weatherRefExtra = useRef();
    const weatherRefLast = useRef();

    const handleBackgroundWeather = useCallback(() => {
        if (condition === CLEAR) {
            return clearWeather;
        } else if (condition === SUNNY) {
            return sunnyWeather;
        } else if (condition === LIGHT_RAIN) {
            return lightRainWeather;
        } else if (condition === MIST) {
            return mistWeather;
        } else if (condition === PARTLY_CLOUDY) {
            return sunnyWeather;
        } else if (condition === HEAVY_RAIN_AND_THUNDER) {
            return partlyCloudyWeather;
        } else if (condition === PATCHY_RAIN_AND_THUNDER) {
            return cloudThunderWeather;
        } else if (condition === THUNDERY_OUTBREAKS_POSSIBLE) {
            return cloudThunderWeather;
        } else {
            return sunnyWeather;
        }
    }, [condition]);

    const handleBackgroundWeatherFilter = useCallback(() => {
        if (condition === PARTLY_CLOUDY) {
            return partlyCloudyWeather;
        } else if (condition === LIGHT_RAIN) {
            return rainWeather;
        } else if (condition === HEAVY_RAIN_AND_THUNDER) {
            return thunderWeather;
        } else if (condition === PATCHY_RAIN_AND_THUNDER) {
            return thunderWeather;
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
                            <CurrentWeather onCurrent={current} />
                            <DailyWeather />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
