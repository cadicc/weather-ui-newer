/** @jsxImportSource @emotion/react */
import {
    dayDetailBorderColorCss,
    dayDetailGridChartCss,
    dayDetaulMaxWidthCss,
    dayDetailAlignTextCss,
} from '~/common/styles.ts';
import Divider from '@mui/material/Divider';
import { VictoryPie } from 'victory';

const ChartDayDetail = (prop) => {
    return (
        <div>
            <Divider component="div" css={dayDetailBorderColorCss} />
            <div css={dayDetailGridChartCss}>
                <div css={dayDetaulMaxWidthCss}>
                    <h4>Precipitation</h4>
                    <div>
                        <svg>
                            <VictoryPie
                                standalone={false}
                                width={200}
                                height={200}
                                innerRadius={40}
                                data={[
                                    {
                                        x: '',
                                        y: prop.hasChartDetail.day.totalprecip_mm,
                                        fill: '#33c5ff',
                                    },
                                    { x: '', y: 100 },
                                ]}
                                colorScale={['#33c5ff', '#ffffff']}
                                style={{
                                    labels: {
                                        fill: '#ffffff',
                                    },
                                }}
                            />
                        </svg>
                        <p css={dayDetailAlignTextCss}>{prop.hasChartDetail.day.totalprecip_mm} mm</p>
                    </div>
                </div>
                <div css={dayDetaulMaxWidthCss}>
                    <h4>Humidity</h4>
                    <div>
                        <svg>
                            <VictoryPie
                                standalone={false}
                                width={200}
                                height={200}
                                innerRadius={40}
                                data={[
                                    { x: '', y: prop.hasChartDetail.day.avghumidity, fill: '#33c5ff' },
                                    { x: '', y: 15 },
                                ]}
                                colorScale={['#33c5ff', '#ffffff']}
                            />
                        </svg>
                        <p css={dayDetailAlignTextCss}>{`${prop.hasChartDetail.day.avghumidity}%`}</p>
                    </div>
                </div>
                <div css={dayDetaulMaxWidthCss}>
                    <h4>UV index</h4>
                    <div>
                        <svg>
                            <VictoryPie
                                standalone={false}
                                width={200}
                                height={200}
                                innerRadius={40}
                                data={[
                                    { x: '', y: prop.hasChartDetail.day.uv, fill: '#33c5ff' },
                                    { x: '', y: 10 },
                                ]}
                                colorScale={['#33c5ff', '#ffffff']}
                            />
                        </svg>
                        <p css={dayDetailAlignTextCss}>{prop.hasChartDetail.day.uv}</p>
                    </div>
                </div>
                <div css={dayDetaulMaxWidthCss}>
                    <h4>Max Wind</h4>
                    <div>
                        <svg>
                            <VictoryPie
                                standalone={false}
                                width={200}
                                height={200}
                                innerRadius={40}
                                data={[
                                    { x: '', y: prop.hasChartDetail.day.maxwind_kph, fill: '#33c5ff' },
                                    { x: '', y: 100 },
                                ]}
                                colorScale={['#33c5ff', '#ffffff']}
                            />
                        </svg>
                        <p css={dayDetailAlignTextCss}>{prop.hasChartDetail.day.maxwind_kph} km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChartDayDetail;
