/** @jsxImportSource @emotion/react */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartArea, faStar } from '@fortawesome/free-solid-svg-icons';
import { SET_HOME_ACTIVE, SET_HISTORY_ACTIVE, SET_FAVORITE_ACTIVE } from '~/features/activeNavBar/activeHome';
import { ACTIVE_TRUE } from '~/common/day';
import {
    sliderWidthCss,
    hisWeatherPadItem,
    textDecorationCss,
    navbarDisplayItemDetail,
    navbarActionItemDetail,
    navbarStyleItem,
    navbarActionItemDetailHis,
    navbarActionItemDetailFav,
} from '~/common/styles.ts';

const ExtendNavBar = () => {
    const dispatch = useDispatch();
    const isActiveHome = useSelector((state) => state.activeNav.home);
    const isActiveHis = useSelector((state) => state.activeNav.history);
    const isActiveFav = useSelector((state) => state.activeNav.favorite);

    const handleClickHome = () => {
        dispatch(SET_HOME_ACTIVE(ACTIVE_TRUE));
    };
    const handleClickHis = () => {
        dispatch(SET_HISTORY_ACTIVE(ACTIVE_TRUE));
    };
    const handleClickFav = () => {
        dispatch(SET_FAVORITE_ACTIVE(ACTIVE_TRUE));
    };

    return (
        <div css={sliderWidthCss}>
            <Link to="/historical-weather" onClick={handleClickHome} css={textDecorationCss}>
                <div css={navbarDisplayItemDetail}>
                    {isActiveHome ? <span css={navbarActionItemDetail}></span> : <span></span>}
                    <span>
                        <IconButton aria-label="Home" size="small">
                            <FontAwesomeIcon icon={faHouse} inverse css={hisWeatherPadItem} />
                        </IconButton>
                    </span>
                    <span css={navbarStyleItem}>Forecast</span>
                </div>
            </Link>
            <Link to="/historical-weather" onClick={handleClickHis} css={textDecorationCss}>
                <div css={navbarDisplayItemDetail}>
                    {isActiveHis ? <span css={navbarActionItemDetailHis}></span> : <span></span>}
                    <span>
                        <IconButton aria-label="HistoricalWeather" size="small">
                            <FontAwesomeIcon icon={faChartArea} inverse css={hisWeatherPadItem} />
                        </IconButton>
                    </span>
                    <span css={navbarStyleItem}>Historical Weather</span>
                </div>
            </Link>
            <Link to="/favorites" onClick={handleClickFav} css={textDecorationCss}>
                <div css={navbarDisplayItemDetail}>
                    {isActiveFav ? <span css={navbarActionItemDetailFav}></span> : <span></span>}
                    <span>
                        <IconButton aria-label="Favorites" size="small">
                            <FontAwesomeIcon icon={faStar} inverse css={hisWeatherPadItem} />
                        </IconButton>
                    </span>
                    <span css={navbarStyleItem}>Favorites</span>
                </div>
            </Link>
        </div>
    );
};
export default ExtendNavBar;
