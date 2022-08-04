/** @jsxImportSource @emotion/react */
import * as moment from 'moment';
import { Container } from '@mui/material';
import useAxiosHistory from '~/service/history';
import ChartBar from '../Chart';
import TitleHisWeather from './component/Title';
import SelectOptionHisWeather from './component/SelectOption';
import DetailHisWeather from './component/Detail';
import { hisWeatherSetWidth, hisWeatherDistanceContent } from '~/common/styles.ts';

const Historical = () => {
    const { fore, location } = useAxiosHistory();
    const data = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.temp_c.toFixed(0)}` };
        });
    });

    if (data.length > 0) {
        return (
            <div css={hisWeatherSetWidth}>
                <Container>
                    <div css={hisWeatherDistanceContent}>
                        <TitleHisWeather hasLocationHisWeather={location} />
                        <ChartBar />
                        <SelectOptionHisWeather />
                        <DetailHisWeather hasForecastHisWeather={fore} />
                    </div>
                </Container>
            </div>
        );
    } else {
        return <></>;
    }
};
export default Historical;
