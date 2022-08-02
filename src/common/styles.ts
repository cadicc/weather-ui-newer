import { css } from '@emotion/react';
import light from '~/weatherBackground/light/light.png';
import cloud3 from '~/weatherBackground/cloud/cloud-3.png';
import cloud5 from '~/weatherBackground/cloud/cloud5.png';
import mist from '~/weatherBackground/mist/mist-reverse.png';
import cloud from '~/weatherBackground/cloud/cloud.png';
import rain4 from '~/weatherBackground/rain/rain4.png';
import thunder from '~/weatherBackground/lightning/thunder.png';
import cloudThunder from '~/weatherBackground/cloud/cloud-thunder.png';

export const sunnyWeather = css({
    backgroundImage: `url(${light})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: 'contain',
});
export const clearWeather = css({
    backgroundImage: `url(${cloud3})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'top',
});
export const lightRainWeather = css({
    backgroundImage: `url(${cloud5})`,
    backgroundPositionY: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center top',
});
export const mistWeather = css({
    backgroundImage: `url(${mist})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
});
export const partlyCloudyWeather = css({
    backgroundImage: `url(${cloud})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 10em',
    backgroundSize: 'contain',
});
export const rainWeather = css({
    backgroundImage: `url(${rain4})`,
});
export const thunderWeather = css({
    backgroundImage: `url(${thunder})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
});
export const cloudThunderWeather = css({
    backgroundImage: `url(${cloudThunder})`,
    backgroundPositionY: 'top',
});
