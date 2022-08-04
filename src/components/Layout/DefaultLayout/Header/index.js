/** @jsxImportSource @emotion/react */
import {
    headerDisplay,
    hisWeatherPadItem,
    headerNavigation,
    headerPosition,
    headerTitleFontSize,
    headerTitleWidth,
} from '~/common/styles.ts';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { get_swap } from '~/features/SwapNavBar';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderTitleAndSearch from './component/SearchInput';

const Header = () => {
    const title = useSelector((state) => state.switch.value);
    const swap = useSelector((state) => state.swap.value);
    const dispatch = useDispatch();

    return (
        <div css={headerDisplay}>
            <div css={headerNavigation} onClick={() => dispatch(get_swap(!swap))}>
                <span>
                    <IconButton aria-label="navigation" size="small">
                        <FontAwesomeIcon icon={faBars} inverse css={hisWeatherPadItem} />
                    </IconButton>
                </span>
            </div>
            <div css={headerPosition}>
                <div css={headerTitleWidth}>
                    <div css={headerTitleFontSize}>{title}</div>
                </div>
                <HeaderTitleAndSearch />
            </div>
        </div>
    );
};
export default Header;
