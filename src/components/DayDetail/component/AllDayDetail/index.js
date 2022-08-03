/** @jsxImportSource @emotion/react */
import { dayDetailBorderColorCss } from '~/common/styles.ts';
import Divider from '@mui/material/Divider';

const AllDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <h4>All Day</h4>
            <p>{`Weather forecast will happen is ${prop.hasDayDetail.day.condition.text}. The high will be ${prop.hasDayDetail.day.maxtemp_c} and the low will be ${prop.hasDayDetail.day.mintemp_c}`}</p>
        </div>
    );
};

export default AllDayDetail;
