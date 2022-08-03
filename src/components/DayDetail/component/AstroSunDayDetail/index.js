/** @jsxImportSource @emotion/react */
import { dayDetailBorderColorCss, dayDetailPositionIconCss, dayDetailAstroCss } from '~/common/styles.ts';
import Divider from '@mui/material/Divider';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const SunDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <div>
                <h4>Sunrise</h4>
                <div>
                    <span css={dayDetailPositionIconCss}>
                        <WbSunnyIcon />
                    </span>
                    <span css={dayDetailAstroCss}>{prop.hasSunDetail.astro.sunrise}</span>
                </div>
            </div>
            <div>
                <h4>Sunset</h4>
                <div>
                    <span css={dayDetailPositionIconCss}>
                        <WbTwilightIcon />
                    </span>
                    <span css={dayDetailAstroCss}>{prop.hasSunDetail.astro.sunset}</span>
                </div>
            </div>
        </div>
    );
};
export default SunDayDetail;
