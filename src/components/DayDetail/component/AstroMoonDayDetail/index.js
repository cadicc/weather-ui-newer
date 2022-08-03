/** @jsxImportSource @emotion/react */
import {
    dayDetailBorderColorCss,
    dayDetailPositionIconCss,
    dayDetailAstroCss,
    dayDetailDefaultIcon,
} from '~/common/styles.ts';
import Divider from '@mui/material/Divider';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import CircleIcon from '@mui/icons-material/Circle';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const MoonDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <div>
                <h4>Moonrise</h4>
                <div>
                    <span css={dayDetailPositionIconCss}>
                        <ModeNightIcon />
                    </span>
                    <span css={dayDetailAstroCss}>{prop.hasMoonDetail.astro.moonrise}</span>
                </div>
            </div>
            <div>
                <h4>Moonset</h4>
                <div>
                    <span css={dayDetailPositionIconCss}>
                        <Brightness4Icon />
                    </span>
                    <span css={dayDetailAstroCss}>{prop.hasMoonDetail.astro.moonset}</span>
                </div>
            </div>
            <div>
                <h4>Moon Phase</h4>
                <div css={dayDetailDefaultIcon}>
                    <Brightness2Icon />
                    <CircleIcon />
                    <NightlightIcon />
                    <NightlightRoundIcon />
                </div>
                <p>{prop.hasMoonDetail.astro.moon_phase}</p>
            </div>
        </div>
    );
};

export default MoonDayDetail;
