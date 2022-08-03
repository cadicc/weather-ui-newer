/** @jsxImportSource @emotion/react */
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import AllDayDetail from './component/AllDayDetail';
import SunDayDetail from './component/AstroSunDayDetail';
import MoonDayDetail from './component/AstroMoonDayDetail';
import ChartDayDetail from './component/Chart';
import PrecipitationDayDetail from './component/PrecipitationDayDetail';
import ThermometerDayDetail from './component/Thermometer';
import { dayDetailGridCss, dayDetailTextShadowCss } from '~/common/styles.ts';

const DayDetail = (props) => {
    const showDaily = useSelector((state) => state.daily.show);
    const detailRef = useRef();

    console.log(props.onForecastWeatherDetail);

    const handleShowDayDetail = () => {
        for (let i = 0; i < props.onForecastWeatherDetail.length; i++) {
            if (i === showDaily) {
                let forecastDayDetail = props.onForecastWeatherDetail[i];
                return (
                    <div css={dayDetailGridCss}>
                        <AllDayDetail hasDayDetail={forecastDayDetail} />
                        <SunDayDetail hasSunDetail={forecastDayDetail} />
                        <MoonDayDetail hasMoonDetail={forecastDayDetail} />
                        <ChartDayDetail hasChartDetail={forecastDayDetail} />
                        <PrecipitationDayDetail hasPrecipDetail={forecastDayDetail} />
                        <ThermometerDayDetail hasThermometerDetail={forecastDayDetail} />
                    </div>
                );
            }
        }
    };

    return (
        <div ref={detailRef} css={dayDetailTextShadowCss}>
            <h2>Day Detail</h2>
            {handleShowDayDetail()}
        </div>
    );
};
export default DayDetail;
