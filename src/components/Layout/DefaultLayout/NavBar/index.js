/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import MinNavBar from './component/MinNavBar';
import ExtendNavBar from './component/ExtendNavBar';
import { navbarPosition, navbarPositionDetail } from '~/common/styles.ts';

const NavBar = () => {
    const swap = useSelector((state) => state.swap.status);

    return (
        <div>
            {swap ? (
                <div css={navbarPosition}>
                    <MinNavBar />
                </div>
            ) : (
                <div css={navbarPositionDetail}>
                    <ExtendNavBar />
                </div>
            )}
        </div>
    );
};
export default NavBar;
