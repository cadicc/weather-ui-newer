import { css } from '@emotion/react';

export const hourlyCss = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});
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
export const buttonDetailCss = css({
    border: '0px solid #ffffff9e',
    borderRadius: '0px',
    padding: '5px 5px 12px 5px',
    backgroundColor: '#ffffff',
    margin: '0 5px',
    '&:active': {
        backgroundColor: '#ffffff',
    },
    '&:hover': {
        backgroundColor: '#ffffff',
    },
});
export const buttonSummaryCss = css({
    border: '0px solid #ffffff9e',
    borderRadius: '0px',
    padding: '5px 5px 12px 5px',
    backgroundColor: '#ffffff9e',
    margin: '0 5px',
    '&:active': {
        backgroundColor: '#ffffff',
    },
    '&:hover': {
        backgroundColor: '#ffffff',
    },
});
export const buttonIconCss = css({
    position: 'relative',
    top: '5px',
});
export const dividerCss = css({
    borderColor: '#ffffff9e !important',
});
export const hourlySliderCss = css({
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    marginTop: '10px',
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
