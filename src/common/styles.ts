import { css } from '@emotion/react';
import light from '~/weatherBackground/light/light.png';
import cloud3 from '~/weatherBackground/cloud/cloud-3.png';
import cloud5 from '~/weatherBackground/cloud/cloud5.png';
import mist from '~/weatherBackground/mist/mist-reverse.png';
import cloud from '~/weatherBackground/cloud/cloud.png';
import rain4 from '~/weatherBackground/rain/rain4.png';
import thunder from '~/weatherBackground/lightning/thunder.png';
import cloudThunder from '~/weatherBackground/cloud/cloud-thunder.png';
import sunlight from '~/weatherBackground/light/sunlight.png';

// Set screen
export const defaultCss = css({
    ':root': {
        '--primary': '#242f9b',
        '--secondary': '#ffffff',
        fontFamily: "'Manrope', sans-serif",
    },
});

// Header
export const headerDisplay = css({
    display: 'flex',
});
export const headerNavigation = css({
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: '3%',
    height: '3.2%',
    backgroundColor: '#1f1f1f',
    top: '0',
    left: '0',
    padding: '10px 0',
});
export const headerPosition = css({
    display: 'flex',
    backgroundColor: '#20253d',
    position: 'fixed',
    width: '96.5%',
    top: '0',
    right: '0',
    zIndex: '1',
    alignItems: 'center',
    color: '#ffffff',
    padding: '5px',
});
export const headerTitleWidth = css({
    width: '67%',
});
export const headerSearchWidth = css({
    width: '30%',
});
export const headerTitleFontSize = css({
    fontWeight: 'bold',
    fontSize: '14px',
    paddingLeft: '10px',
});
export const headerSearchPosition = css({
    display: 'flex',
    justifyContent: 'flex-end',
});
export const headerSearchPadding = css({
    padding: '5px',
});
export const headerSearchList = css({
    listStyle: 'none',
    backgroundColor: '#ffffff9e',
    margin: '0',
    padding: '0',
    color: '#000',
    cursor: 'pointer',
    width: '217px',
    marginLeft: '17px',
    marginTop: '-3px',
});
export const headerSearchInput = css({
    border: '0px',
    padding: '7px 5px',
    height: '50%',
    width: '125%',
    '&:focus-visible': {
        outline: 'none',
    },
});
export const headerSearchIcon = css({
    position: 'absolute',
    right: '10px',
    top: '10px',
});
export const headerSearchIconColor = css({
    color: '#000',
});

// Navbar
export const navbarPosition = css({
    position: 'fixed',
    display: 'flex',
    height: '95%',
    width: '3%',
    left: '0',
    bottom: '0',
    backgroundColor: '#1f1f1f',
});
export const navbarDisplayItem = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 5px',
    '&:hover': {
        backgroundColor: '#ffffff5e',
    },
});
export const navbarActionItem = css({
    position: 'absolute',
    width: '8%',
    height: '48px',
    top: '0',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarActionItemHis = css({
    position: 'absolute',
    width: '8%',
    height: '48px',
    top: '48px',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarActionItemFav = css({
    position: 'absolute',
    width: '8%',
    height: '48px',
    top: '96px',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarPositionDetail = css({
    position: 'fixed',
    display: 'flex',
    height: '95%',
    width: '11%',
    left: '0',
    bottom: '0',
    backgroundColor: '#1f1f1f',
});
export const navbarDisplayItemDetail = css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 5px',
    '&:hover': {
        backgroundColor: '#ffffff5e',
    },
});
export const navbarActionItemDetail = css({
    position: 'absolute',
    width: '2.5%',
    height: '48px',
    top: '0',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarActionItemDetailHis = css({
    position: 'absolute',
    width: '2.5%',
    height: '48px',
    top: '48px',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarActionItemDetailFav = css({
    position: 'absolute',
    width: '2.5%',
    height: '48px',
    top: '96px',
    left: '0',
    backgroundColor: '#239df2',
});
export const navbarStyleItem = css({
    marginLeft: '10px',
    color: '#fff',
    fontWeight: 'bold',
});

// Current background weather
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

// Historical weather
export const hisWeatherSetWidth = css({
    width: '100%',
    height: '1080px',
    backgroundColor: '#222121 !important',
    fontFamily: "'Manrope', sans-serif !important",
});
export const hisWeatherDistanceContent = css({
    padding: '10px 0',
    margin: '30px 0 0 30px',
});
export const hisWeatherDisplay = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});
export const hisWeatherPrimaryColor = css({
    color: '#ffffff',
});
export const hisWeatherDisplayItem = css({
    display: 'flex',
    justifyContent: 'flex-end',
});
export const hisWeatherPadItem = css({
    padding: '0 5px',
});
export const hisWeatherActiveButton = css({
    fontFamily: "'Manrope', sans-serif",
    border: '0px solid #ffffff9e',
    borderRadius: '0px',
    padding: '5px',
    backgroundColor: '#ffffff',
    margin: '0 5px',
    '&:active': {
        backgroundColor: '#ffffff',
    },
});
export const hisWeatherHiddenButton = css({
    fontFamily: "'Manrope', sans-serif",
    border: '0px solid #ffffff9e',
    borderRadius: '0px',
    padding: '5px',
    backgroundColor: '#ffffff9e',
    margin: '0 5px',
    '&:active': {
        backgroundColor: '#ffffff',
    },
});
export const hisWeatherSelectField = css({
    padding: '5px',
    width: '200px',
    border: 'none',
    fontFamily: "'Manrope', sans-serif",
});
export const hisWeatherDetailField = css({
    margin: '10px 0',
    color: '#ffffff',
});
export const hisWeatherDisplayField = css({
    display: 'flex',
    justifyContent: 'space-between',
});
export const hisWeatherWidthItem = css({
    width: '200px',
});
export const hisWeatherIcon = css({
    position: 'relative',
    top: '-5px',
    width: '10px !important',
    height: '10px !important',
});

// Favorite weather
export const FavWeatherSetScreen = css({
    width: '1920px',
    height: '1080px',
    backgroundColor: '#222121',
    fontFamily: "'Manrope', sans-serif !important",
    marginTop: '30px',
});
export const FavWeatherDistanceScreen = css({
    display: 'block',
    height: '20px',
});
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
export const favWeatherlistFav = css({
    height: '100%',
    margin: '0 10px 0 0',
});
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
export const favWeatherCurrentPad = css({
    padding: '15px 10px',
    textShadow: '1px 1px 2px #000000',
});
export const favWeatherCurrentFont = css({
    fontSize: '14px',
    color: '#ffffff',
});
export const favWeatherCurrentDisplay = css({
    display: 'flex',
    color: '#ffffff',
    justifyContent: 'space-between',
    marginTop: '5px',
});
export const favWeatherItemWidth = css({
    width: '40%',
});
export const favWeatherTempCItem = css({
    fontSize: '30px',
    margin: '5px 0',
});
export const favWeatherDefaultItem = css({
    width: '25%',
    height: '100%',
    backgroundColor: '#33c5ff',
});
export const favWeatherDisable = css({
    pointerEvents: 'none',
    opacity: '0.4',
    width: '25%',
    height: '100%',
    backgroundColor: '#33c5ff',
});
export const favWeatherItemField = css({
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
});
export const favWeatherMargin = css({
    margin: '0 5px',
});
export const favWeatherItemAdd = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '38px 10px',
    textShadow: '1px 1px 2px #000000',
});
export const favWeatherAddIcon = css({
    width: '50px !important',
    height: '50px !important',
    color: '#ffffff',
});

// Add favorite weather
export const addFavWeatherIconBack = css({
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
        'text-decoration': 'underline',
    },
});
export const addFavWeatherPositionIconBack = css({
    position: 'relative',
    top: '5px',
    marginRight: '3px',
});
export const addFavWeatherAlignSearchInput = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});
export const addFavWeatherListSearch = css({
    listStyle: 'none',
    backgroundColor: '#ffffff9e',
    margin: '0',
    padding: '0',
    color: '#000',
    cursor: 'pointer',
    width: '1152px',
    marginTop: '-10px',
});
export const addFavWeatherPadItem = css({
    padding: '5px',
    '&:hover': {
        backgroundColor: '#ffffffc4',
    },
});
export const addFavWeatherInput = css({
    border: '0px',
    padding: '15px 5px',
    height: '50%',
    width: '125%',
    fontSize: '14px',
    '&:focus-visible': {
        outline: 'none',
    },
});
