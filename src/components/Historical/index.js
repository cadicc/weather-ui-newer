/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';
import * as moment from 'moment';
import { Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import useAxiosHistory from '~/service/history';
import ChartBar from '../Chart';
import { set_historical } from '~/features/Historical';
import { set_chart } from '~/features/SwapChart';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
    hisWeatherSetWidth,
    hisWeatherDistanceContent,
    hisWeatherDisplay,
    hisWeatherPrimaryColor,
    hisWeatherDisplayItem,
    hisWeatherPadItem,
    hisWeatherActiveButton,
    hisWeatherHiddenButton,
    hisWeatherSelectField,
} from '~/common/styles.ts';

const Historical = () => {
    const { fore, location } = useAxiosHistory();
    const active = useSelector((state) => state.chart.value);
    const dispatch = useDispatch();
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
                        <div css={hisWeatherDisplay}>
                            <div>
                                <h2 css={hisWeatherPrimaryColor}>{`${location.name}, ${location.country}`}</h2>
                            </div>
                            <div css={hisWeatherDisplayItem}>
                                <div css={hisWeatherPadItem}>
                                    <button
                                        onClick={() => dispatch(set_chart(true))}
                                        css={active ? hisWeatherActiveButton : hisWeatherHiddenButton}
                                    >
                                        Temperature
                                    </button>
                                </div>
                                <div css={hisWeatherPadItem}>
                                    <button
                                        onClick={() => dispatch(set_chart(false))}
                                        css={!active ? hisWeatherActiveButton : hisWeatherHiddenButton}
                                    >
                                        Humidity
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ChartBar />

                        <div>
                            <select
                                onChange={(e) => dispatch(set_historical(e.target.value))}
                                css={hisWeatherSelectField}
                            >
                                <option value={moment().format('DD')} defaultValue>{`${parseInt(
                                    moment().format('DD'),
                                )} / ${moment().format('MM')} / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 1}>{`${
                                    parseInt(moment().format('DD')) - 1
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 2}>{`${
                                    parseInt(moment().format('DD')) - 2
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 3}>{`${
                                    parseInt(moment().format('DD')) - 3
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 4}>{`${
                                    parseInt(moment().format('DD')) - 4
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 5}>{`${
                                    parseInt(moment().format('DD')) - 5
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                                <option value={parseInt(moment().format('DD')) - 6}>{`${
                                    parseInt(moment().format('DD')) - 6
                                } / ${moment().format('MM')}  / ${moment().format('YYYY')}`}</option>
                            </select>
                        </div>
                        <div
                            className={css`
                                margin: 10px 0;
                                color: #ffffff;
                            `}
                        >
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: space-between;
                                `}
                            >
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>High Temperature</h3>
                                    <p>
                                        {fore[0].day.maxtemp_c}{' '}
                                        <CircleOutlinedIcon
                                            className={css`
                                                position: relative;
                                                top: -5px;
                                                width: 10px !important;
                                                height: 10px !important;
                                            `}
                                        />
                                    </p>
                                </div>
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>High Wind</h3>
                                    <p>{`${fore[0].day.maxwind_kph} km/h`}</p>
                                </div>
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>Total Precip</h3>
                                    <p>{`${fore[0].day.totalprecip_mm} mm`}</p>
                                </div>
                            </div>
                            <div
                                className={css`
                                    display: flex;
                                    justify-content: space-between;
                                `}
                            >
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>Low Temperature</h3>
                                    <p>
                                        {fore[0].day.mintemp_c}
                                        <CircleOutlinedIcon
                                            className={css`
                                                position: relative;
                                                top: -5px;
                                                width: 10px !important;
                                                height: 10px !important;
                                            `}
                                        />
                                    </p>
                                </div>
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>Average Vision</h3>
                                    <p>{`${fore[0].day.avgvis_km} km/h`}</p>
                                </div>
                                <div
                                    className={css`
                                        width: 200px;
                                    `}
                                >
                                    <h3>Average Humidity</h3>
                                    <p>{`${fore[0].day.avghumidity} %`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
};
export default Historical;
