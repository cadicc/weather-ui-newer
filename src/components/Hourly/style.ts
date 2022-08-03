import { css } from '@emotion/react';

export const hourlyCss = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
