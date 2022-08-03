/** @jsxImportSource @emotion/react */
import Divider from '@mui/material/Divider';
import { dayDetailBorderColorCss } from '~/common/styles.ts';

const PrecipitationDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <h4>Precipitation</h4>
            <p>Precipitation amount in inches: {prop.hasPrecipDetail.day.totalprecip_in} inches</p>
            <p>Precipitation amount in millimeters: {prop.hasPrecipDetail.day.totalprecip_mm} millimeters</p>
        </div>
    );
};
export default PrecipitationDayDetail;
