import { css } from '@emotion/react';

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
export const dailyItemCircleIconCss = css({
    position: 'absolute',
    width: '10px !important',
    height: '10px !important',
});
export const dailyItemCircleIconSmallerCss = css({
    position: 'absolute',
    width: '7px !important',
    height: '7px !important',
});
