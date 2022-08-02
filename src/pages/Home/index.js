/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import * as moment from 'moment';
import useAxiosCurrent from '~/service/currentApi';
import { backgroundHomeColorLightCss, backgroundHomeColorDarkCss } from './styles.ts';
import CurrentWeather from '~/components/current/currentWeather';
import DailyWeather from '~/components/Daily/index';
import mist from '~/weatherBackground/mist/mist-reverse.png';
import cloud from '~/weatherBackground/cloud/cloud.png';
import cloud5 from '~/weatherBackground/cloud/cloud5.png';
import cloud3 from '~/weatherBackground/cloud/cloud-3.png';
import light from '~/weatherBackground/light/light.png';
import rain4 from '~/weatherBackground/rain/rain4.png';
import cloudThunder from '~/weatherBackground/cloud/cloud-thunder.png';
import thunder from '~/weatherBackground/lightning/thunder.png';

const Forecast = (props) => {
    const { current, condition } = useAxiosCurrent();
    const weatherRef = useRef();
    const weatherRefExtra = useRef();
    const weatherRefLast = useRef();

    useEffect(() => {
        if (condition === 'Sunny') {
            weatherRef.current.style.backgroundImage = `url(${light})`;
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
            weatherRef.current.style.backgroundPositionX = 'right';
            weatherRef.current.style.backgroundSize = 'contain';
        } else if (condition === 'Light rain') {
            weatherRef.current.style.backgroundImage = `url(${cloud5})`;
            weatherRef.current.style.backgroundPositionY = 'top';
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
            weatherRef.current.style.backgroundSize = 'contain';
            weatherRef.current.style.backgroundPosition = 'center top';
            weatherRefExtra.current.style.backgroundImage = `url(${rain4})`;
        } else if (condition === 'Mist') {
            weatherRef.current.style.backgroundImage = `url(${mist})`;
            weatherRef.current.style.backgroundSize = 'contain';
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
        } else if (condition === 'Partly cloudy') {
            weatherRef.current.style.backgroundImage = `url(${light})`;
            weatherRefExtra.current.style.backgroundImage = `url(${cloud})`;
            weatherRef.current.style.backgroundSize = 'contain';
            weatherRef.current.style.backgroundPosition = 'top right';
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
            weatherRefExtra.current.style.backgroundRepeat = 'no-repeat';
            weatherRefExtra.current.style.backgroundPosition = 'center 10em';
            weatherRefExtra.current.style.backgroundSize = 'contain';
        } else if (condition === 'Clear') {
            weatherRef.current.style.backgroundImage = `url(${cloud3})`;
            weatherRefExtra.current.style.backgroundSize = 'contain';
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
            weatherRef.current.style.backgroundPositionY = 'top';
        } else if (condition === 'Moderate or heavy rain with thunder') {
            // weatherRef.current.style.backgroundImage = `url(${rain4})`;
            weatherRefExtra.current.style.backgroundImage = `url(${cloud})`;
            weatherRefLast.current.style.backgroundImage = `url(${thunder})`;
            weatherRefExtra.current.style.backgroundPosition = 'center 10em';
            weatherRefExtra.current.style.backgroundRepeat = 'no-repeat';
            weatherRefExtra.current.style.backgroundSize = 'contain';
            weatherRefLast.current.style.backgroundRepeat = 'no-repeat';
            weatherRefLast.current.style.backgroundPosition = 'right top';
        } else if (condition === 'Patchy light rain with thunder') {
            weatherRef.current.style.backgroundImage = `url(${cloudThunder})`;
            weatherRef.current.style.backgroundPositionY = 'top';
            weatherRefExtra.current.style.backgroundRepeat = 'no-repeat';
            weatherRefExtra.current.style.backgroundImage = `url(${thunder})`;
        } else if (condition === 'Thundery outbreaks possible') {
            weatherRef.current.style.backgroundImage = `url(${cloudThunder})`;
            weatherRef.current.style.backgroundPositionY = 'top';
        } else {
            weatherRef.current.style.backgroundImage = `url(${light})`;
            weatherRef.current.style.backgroundRepeat = 'no-repeat';
            weatherRef.current.style.backgroundPositionX = 'right';
            weatherRef.current.style.backgroundSize = 'contain';
        }
    }, [current, condition]);

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
            <div ref={weatherRefExtra}>
                <div ref={weatherRefLast}>
                    <Container>
                        <CurrentWeather />
                        <DailyWeather />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
