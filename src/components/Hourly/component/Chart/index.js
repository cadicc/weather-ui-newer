import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import { useSelector } from 'react-redux';
import { chartFontSizeCss } from '~/common/styles.ts';
import * as moment from 'moment';

const VictoryAreaChart = (props) => {
    const showHourly = useSelector((state) => state.hourly.data);
    let dataChart = props.onData.map((result) => {
        return result.hour.map((temp) => {
            return {
                x: moment(temp.time, 'YYYY-MM-DD hh:mm').format('hh A'),
                y: temp.temp_c,
            };
        });
    });
    return (
        <VictoryChart height={200} width={1100} css={chartFontSizeCss}>
            <VictoryArea
                style={{
                    data: {
                        fill: '#ffffff5e',
                        fillOpacity: 0.7,
                    },
                    labels: {
                        fontSize: 15,
                        fill: '#ffffff',
                    },
                    text: {
                        fill: '#ffffff !important',
                        fontSize: '12px !important',
                        textTransform: 'lowercase',
                    },
                }}
                data={dataChart[showHourly]}
                labels={({ datum }) => datum.y}
            />

            <VictoryAxis />
        </VictoryChart>
    );
};
export default VictoryAreaChart;
