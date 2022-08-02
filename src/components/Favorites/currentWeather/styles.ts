import { css } from '@emotion/react';
import { maxWidth } from '@mui/system';
import sunlight from '~/weatherBackground/light/sunlight.png';

export const backgroundFavoriteWeatherCss = css({
    width: '25%',
    height: '100%',
    backgroundColor: '#33c5ff',
    backgroundImage: `url(${sunlight})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '70px',
});
export const backgroundPositionFavoriteWeatherCss = css({
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
});
export const paddingFavoriteWeatherCss = css({
    padding: '15px 10px',
    textShadow: '1px 1px 2px #000000',
    span: {
        color: '#ffffff',
    },
});
export const fontSizeLocationFavoriteWeatherCss = css({
    fontSize: '14px',
});
export const conditionFavoriteWeatherCss = css({
    display: 'flex',
    color: '#ffffff',
    justifyContent: 'space-between',
});
export const maxWidthFavoriteWeatherCss = css({
    maxWidth: '40%',
});
export const currentTempWeatherCss = css({
    fontSize: '30px',
    margin: '5px 0',
});
export const circleIconFavoriteWeatherCss = css({
    position: 'relative',
    top: '-5px',
    width: '12px !important',
    height: '12px !important',
    marginLeft: '3px',
    marginBottom: '10px',
});
export const textConditionFavoriteWeatherCss = css({
    margin: '5px 0',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1',
});
export const thermostatIconFavoriteWeatherCss = css({
    width: '15px !important',
    height: '15px !important',
    marginBottom: '-2px',
    marginRight: '5px',
});
export const circleIconSmallerFavoriteWeatherCss = css({
    position: 'relative',
    top: '-5px',
    width: '10px !important',
    height: '10px !important',
    marginLeft: '3px',
});
export const iconSmallerFavoriteWeatherCss = css({
    width: '15px !important',
    height: '15px !important',
    marginBottom: '-2px',
    marginRight: '5px',
});
