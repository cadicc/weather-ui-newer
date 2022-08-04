/** @jsxImportSource @emotion/react */
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import useAxiosHistory from '~/service/history';
import * as moment from 'moment';
import { useSelector } from 'react-redux';

const ChartBar = () => {
    const { fore } = useAxiosHistory();
    const swapChart = useSelector((state) => state.chart.value);

    let tempC = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.temp_c.toFixed(0)}` };
        });
    });
    let humidity = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.humidity.toFixed(0)}` };
        });
    });

    return (
        <>
            {swapChart ? (
                <VictoryChart height={200} width={1100}>
                    <VictoryBar
                        style={{
                            data: { fill: '#124c84' },
                            labels: {
                                fontSize: 12,
                                fill: '#ffffff',
                            },
                        }}
                        data={tempC[0]}
                        labels={({ datum }) => datum.y}
                    />
                    <VictoryAxis
                        style={{
                            tickLabels: {
                                fontSize: 12,
                                fill: '#ffffff',
                                textTransform: 'lowercase',
                            },
                        }}
                    />
                </VictoryChart>
            ) : (
                <VictoryChart height={200} width={1100}>
                    <VictoryBar
                        style={{
                            data: { fill: '#124c84' },
                            labels: {
                                fontSize: 12,
                                fill: '#ffffff',
                            },
                        }}
                        data={humidity[0]}
                        labels={({ datum }) => datum.y}
                    />

                    <VictoryAxis
                        style={{
                            tickLabels: {
                                fontSize: 12,
                                fill: '#ffffff',
                                textTransform: 'lowercase',
                            },
                        }}
                    />
                </VictoryChart>
            )}
        </>
    );
};
export default ChartBar;
