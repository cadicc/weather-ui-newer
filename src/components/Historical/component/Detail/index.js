/** @jsxImportSource @emotion/react */
import { hisWeatherDetailField, hisWeatherDisplayField, hisWeatherWidthItem, hisWeatherIcon } from '~/common/styles.ts';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const DetailHisWeather = (props) => {
    return (
        <div css={hisWeatherDetailField}>
            <div css={hisWeatherDisplayField}>
                <div css={hisWeatherWidthItem}>
                    <h3>High Temperature</h3>
                    <p>
                        {props.hasForecastHisWeather[0].day.maxtemp_c} <CircleOutlinedIcon css={hisWeatherIcon} />
                    </p>
                </div>
                <div css={hisWeatherWidthItem}>
                    <h3>High Wind</h3>
                    <p>{`${props.hasForecastHisWeather[0].day.maxwind_kph} km/h`}</p>
                </div>
                <div css={hisWeatherWidthItem}>
                    <h3>Total Precip</h3>
                    <p>{`${props.hasForecastHisWeather[0].day.totalprecip_mm} mm`}</p>
                </div>
            </div>
            <div css={hisWeatherDisplayField}>
                <div css={hisWeatherWidthItem}>
                    <h3>Low Temperature</h3>
                    <p>
                        {props.hasForecastHisWeather[0].day.mintemp_c}
                        <CircleOutlinedIcon css={hisWeatherIcon} />
                    </p>
                </div>
                <div css={hisWeatherWidthItem}>
                    <h3>Average Vision</h3>
                    <p>{`${props.hasForecastHisWeather[0].day.avgvis_km} km/h`}</p>
                </div>
                <div css={hisWeatherWidthItem}>
                    <h3>Average Humidity</h3>
                    <p>{`${props.hasForecastHisWeather[0].day.avghumidity} %`}</p>
                </div>
            </div>
        </div>
    );
};
export default DetailHisWeather;
