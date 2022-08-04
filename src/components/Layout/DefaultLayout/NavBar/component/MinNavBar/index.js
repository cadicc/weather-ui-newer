/** @jsxImportSource @emotion/react */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChartArea, faStar } from '@fortawesome/free-solid-svg-icons';
import { SET_HOME_ACTIVE, SET_HISTORY_ACTIVE, SET_FAVORITE_ACTIVE } from '~/features/activeNavBar/activeHome';
import { ACTIVE_TRUE, ACTIVE_FALSE } from '~/common/day';
import {
    navbarPosition,
    sliderWidthCss,
    navbarDisplayItem,
    hisWeatherPadItem,
    navbarActionItem,
    navbarActionItemHis,
    navbarActionItemFav,
} from '~/common/styles.ts';

const MinNavBar = () => {
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
        <div css={navbarPosition}>
            <div css={sliderWidthCss}>
                <Link to="/" onClick={handleClickHome}>
                    <div css={navbarDisplayItem}>
                        <span>
                            <IconButton aria-label="Home" size="small">
                                <FontAwesomeIcon icon={faHouse} inverse css={hisWeatherPadItem} />
                            </IconButton>
                        </span>
                        {isActiveHome ? <span css={navbarActionItem}></span> : <span></span>}
                    </div>
                </Link>
                <Link to="/historical-weather" onClick={handleClickHis}>
                    <div css={navbarDisplayItem}>
                        <span>
                            <IconButton aria-label="Historical Weather" size="small">
                                <FontAwesomeIcon icon={faChartArea} inverse css={hisWeatherPadItem} />
                            </IconButton>
                        </span>
                        {isActiveHis ? <span css={navbarActionItemHis}></span> : <span></span>}
                    </div>
                </Link>
                <Link to="/favorites" onClick={handleClickFav}>
                    <div css={navbarDisplayItem}>
                        <span>
                            <IconButton aria-label="Favorites" size="small">
                                <FontAwesomeIcon icon={faStar} inverse css={hisWeatherPadItem} />
                            </IconButton>
                        </span>
                        {isActiveFav ? <span css={navbarActionItemFav}></span> : <span></span>}
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default MinNavBar;
