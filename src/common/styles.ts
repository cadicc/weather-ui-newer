import { css } from '@emotion/react';
import light from '~/weatherBackground/light/light.png';
import cloud3 from '~/weatherBackground/cloud/cloud-3.png';
import cloud5 from '~/weatherBackground/cloud/cloud5.png';
import mist from '~/weatherBackground/mist/mist-reverse.png';
import cloud from '~/weatherBackground/cloud/cloud.png';
import rain4 from '~/weatherBackground/rain/rain4.png';
import thunder from '~/weatherBackground/lightning/thunder.png';
import cloudThunder from '~/weatherBackground/cloud/cloud-thunder.png';
import { fontSize } from '@mui/system';

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

// Current weather detail
export const currentWeatherCss = css({
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
    margin: '40px 0',
    textShadow: '1px 1px 3px #000',
});
export const currentWeatherAlignCss = css({
    textAlign: 'center',
});
export const currentWeatherTempFielCss = css({
    display: 'flex',
    justifyContent: 'center',
    margin: '20px auto',
});
export const tempWeatherBiggerCss = css({
    fontSize: '80px',
    fontWeight: '300',
    margin: '0',
    lineHeight: '0.7',
});
export const currentWeatherSpaceCss = css({
    margin: '5px 0',
});
export const currentWeatherLineCss = css({
    display: 'flex',
    justifyContent: 'space-around',
});
export const currentWeatherFeelLikeCss = css({
    display: 'flex',
    justifyContent: 'center',
    p: {
        padding: '0 2px 0 10px',
        margin: '5px 0',
    },
    FontAwesomeIcon: {
        width: '5px',
    },
});
export const currentWeatherWindCss = css({
    display: 'flex',
    alignContent: 'center',
});
export const currentWeatherTextCss = css({
    padding: '0 10px',
    margin: '5px 0',
});
export const dailyItemCircleIconCss = css({
    width: '10px !important',
    height: '10px !important',
});
export const currentWindIconCss = css({
    position: 'relative',
    top: '4px',
});

// Daily weather
export const dailyCss = css({
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '5px 0',
});
export const dailyItemActiveCss = css({
    padding: '20px',
    margin: '5px',
    width: '150px',
    border: '2px solid #ffffff5e',
    textShadow: '1px 1px 2px #000000',
    backgroundColor: '#ffffff5e',
    '&:hover': {
        border: '2px solid #ffffff',
        backgroundColor: '#ffffff',
    },
    '&:active': {
        backgroundColor: '#ffffff5e',
    },
});
export const dailyItemCss = css({
    padding: '20px',
    margin: '5px',
    width: '150px',
    border: '2px solid #ffffff00',
    textShadow: '1px 1px 2px #000000',
    '&:hover': {
        border: '2px solid #ffffff',
        backgroundColor: '#ffffff',
    },
    '&:active': {
        backgroundColor: '#ffffff5e',
    },
});
export const dailyItemDescriptionCss = css({
    listStyle: 'none',
    paddingLeft: '0px',
});
export const dailyItemTempMaxCss = css({
    margin: '0 10px 0 5px',
    fontWeight: 'bold',
    fontSize: '16px',
});
export const dailyItemTempMinCss = css({
    margin: '0 5px',
    fontSize: '14px',
    opacity: '0.5',
});
export const dailyItemCircleIconBiggerCss = css({
    position: 'absolute',
    width: '10px !important',
    height: '10px !important',
});
export const dailyItemCircleIconSmallerCss = css({
    position: 'absolute',
    width: '7px !important',
    height: '7px !important',
});

// Victory Chart
export const chartFontSizeCss = css({
    fontSize: '5px',
});
export const chartStyleCss = css({
    tspan: {
        fill: '#ffffff !important',
        fontSize: '12px !important',
        textTransform: 'lowercase',
    },
});

// Slider
export const slideCss = css({
    padding: '5px 10px',
    paddingLeft: '0',
    display: 'flex',
    flexFlow: 'row',
    // backgroundColor: '#f3f3f3',
    margin: '0 20px',
    marginLeft: '0',
    width: '100%',
});
export const sliderWidthCss = css({
    width: '100%',
});
export const sliderItemsCss = css({
    paddingLeft: '0',
    margin: '0 20px',
    width: '200px',
    textShadow: '2px 2px 5px #000000',
});
export const sliderItemImagesCss = css({
    width: '50px',
    height: '50px',
});
export const sliderItemIconCss = css({
    position: 'absolute',
    width: '8px !important',
    height: '8px !important',
    margin: '0 3px',
});
export const sliderItemConditionCss = css({
    fontSize: '12px',
    '-o-text-overflow': 'ellipsis',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1',
});
export const sliderItemTempCss = css({
    marginTop: '20px',
    fontSize: '12px',
});
export const sliderItemTempSpaceCss = css({
    marginLeft: '10px',
});
export const sliderItemWindCss = css({
    fontSize: '12px',
});
export const sliderItemTimeCss = css({
    marginTop: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
});

// Day detail
export const dayDetailGridCss = css({
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 2fr 2.5fr',
    gridColumnGap: '30px',
});
export const dayDetailGridChartCss = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoRows: '1fr 1fr',
    tspan: {
        display: 'none',
    },
});
export const dayDetailBorderColorCss = css({
    borderColor: '#ffffff9e !important',
});
export const dayDetailPositionIconCss = css({
    position: 'relative',
    top: '4px',
});
export const dayDetailAstroCss = css({
    fontSize: '20px',
    marginLeft: '5px',
});
export const dayDetailAlignTextCss = css({
    textAlign: 'center',
    fontSize: '25px',
});
export const dayDetaulMaxWidthCss = css({
    maxWidth: '200px',
    div: {
        svg: {
            marginTop: '-35px',
        },
    },
});
export const dayDetailDefaultIcon = css({
    color: 'grey',
});
export const dayDetailTextShadowCss = css({
    textShadow: '1px 1px 2px #000000',
});
