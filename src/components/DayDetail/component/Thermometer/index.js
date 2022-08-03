/** @jsxImportSource @emotion/react */
import Divider from '@mui/material/Divider';
import Thermometer from 'react-thermometer-component';
import { dayDetailBorderColorCss } from '~/common/styles.ts';

const ThermometerDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <h4>Temperature</h4>
            <Thermometer
                theme="light"
                value={prop.hasThermometerDetail.day.avgtemp_c}
                max="100"
                steps="2"
                format="°C"
                size="small"
                height="200"
            />
        </div>
    );
};
export default ThermometerDayDetail;
