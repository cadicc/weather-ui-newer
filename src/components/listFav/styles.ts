import { css } from '@emotion/react';
import sunlight from '~/weatherBackground/light/sunlight.png';

export const listFavDisplayCss = css({
    display: 'flex',
    justifyContent: 'flex-start',
});
export const listFavItemsCss = css({
    width: '27%',
    height: '100%',
    backgroundColor: '#33c5ff',
    backgroundImage: `url(${sunlight})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '70px',
    margin: '0 15px',
    marginLeft: '0',
    '&:hover': {
        boxShadow: '#ffffff 0px 2px 10px',
    },
});
export const textDecorationCss = css({
    textDecoration: 'none',
});
