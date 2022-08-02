import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import Divider from '@mui/material/Divider';
import useAxios from '~/service/forecast';
import { VictoryPie } from 'victory';
import Thermometer from 'react-thermometer-component';
import '../DayDetail/index.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import CircleIcon from '@mui/icons-material/Circle';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const DayDetail = () => {
    const { data } = useAxios();
    const [moonQuarter, setMoonQuarter] = useState('grey');
    const [fullMoon, setFullMoon] = useState('grey');
    const [newMoon, setNewMoon] = useState('grey');
    const [waxingCrescent, setWaxingCrescent] = useState('grey');
    const showDetail = useSelector((state) => state.hourly.dataHour);
    const showDaily = useSelector((state) => state.daily.show);
    const detailRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            if (showDaily === 0) {
                detailRef.current.children.detail_0.style.display = 'block';
                detailRef.current.children.detail_1.style.display = 'none';
                detailRef.current.children.detail_2.style.display = 'none';
            } else if (showDaily === 1) {
                detailRef.current.children.detail_0.style.display = 'none';
                detailRef.current.children.detail_1.style.display = 'block';
                detailRef.current.children.detail_2.style.display = 'none';
            } else if (showDaily === 2) {
                detailRef.current.children.detail_0.style.display = 'none';
                detailRef.current.children.detail_1.style.display = 'none';
                detailRef.current.children.detail_2.style.display = 'block';
            }
            switch (data.length > 0) {
                case data[showDetail].astro.moon_phase === 'Waning Gibbous':
                    setMoonQuarter('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'Last Quarter':
                    setMoonQuarter('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'Full Moon':
                    setFullMoon('#ffffff');
                    break;
                case data[showDetail].astro.moon_phase === 'New Moon':
                    setNewMoon('#ffffff');
                    break;

                case data[showDetail].astro.moon_phase === 'Waxing Crescent':
                    setWaxingCrescent('#ffffff');
                    break;
                default:
                    setMoonQuarter('#ffffff');
                    break;
            }
        }, 150);
    }, [showDetail, data, showDaily]);

    return (
        <div
            ref={detailRef}
            className={css`
                text-shadow: 1px 1px 2px #000000;
            `}
        >
            <h2>Day Detail</h2>
            {data.map((detail, index) => (
                <div key={index} id={`detail_${index}`}>
                    <div className="detail">
                        <div className="detail-forecast">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>All Day</h4>
                            <p>{`Weather forecast will happen is ${detail.day.condition.text}. The high will be ${detail.day.maxtemp_c} and the low will be ${detail.day.mintemp_c}`}</p>
                        </div>
                        <div className="detail-sunrise">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <div>
                                <h4>Sunrise</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 5px;
                                        `}
                                    >
                                        <WbSunnyIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.sunrise}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Sunset</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <WbTwilightIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.sunset}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="detail-moonrise">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />

                            <div>
                                <h4>Moonrise</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <ModeNightIcon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                            margin-left: 5px;
                                        `}
                                    >
                                        {detail.astro.moonrise}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Moonset</h4>
                                <div>
                                    <span
                                        className={css`
                                            position: relative;
                                            top: 4px;
                                        `}
                                    >
                                        <Brightness4Icon />
                                    </span>
                                    <span
                                        className={css`
                                            font-size: 20px;
                                            margin-left: 2px;
                                        `}
                                    >
                                        {' '}
                                        {detail.astro.moonset}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h4>Moon Phase</h4>
                                <div
                                    className={css`
                                        color: grey;
                                    `}
                                >
                                    <Brightness2Icon style={{ color: waxingCrescent }} />
                                    <CircleIcon style={{ color: fullMoon }} />
                                    <NightlightIcon style={{ color: moonQuarter }} />
                                    <NightlightRoundIcon style={{ color: newMoon }} />
                                </div>
                                <p>{detail.astro.moon_phase}</p>
                            </div>
                        </div>
                        <div className="detail-chart">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <div
                                className={css`
                                    display: grid;
                                    grid-template-columns: 1fr 1fr;
                                    grid-auto-rows: 1fr 1fr;
                                    & tspan {
                                        display: none;
                                    }
                                `}
                            >
                                <div
                                    className={css`
                                        max-width: 200px;
                                        & svg {
                                            width: 200px;
                                        }
                                    `}
                                >
                                    <h4>Precipitation</h4>
                                    <div>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    {
                                                        x: '',
                                                        y: detail.day.totalprecip_mm,
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
                                        <p
                                            className={css`
                                                text-align: center;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.totalprecip_mm} mm
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={css`
                                        max-width: 200px;
                                    `}
                                >
                                    <h4>Humidity</h4>
                                    <div>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.avghumidity, fill: '#33c5ff' },
                                                    { x: '', y: 15 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                        <p
                                            className={css`
                                                text-align: center;
                                                font-size: 25px;
                                            `}
                                        >
                                            {`${detail.day.avghumidity}%`}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={css`
                                        max-width: 200px;
                                    `}
                                >
                                    <h4>UV index</h4>
                                    <div>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.uv, fill: '#33c5ff' },
                                                    { x: '', y: 10 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                        <p
                                            className={css`
                                                text-align: center;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.uv}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={css`
                                        max-width: 200px;
                                    `}
                                >
                                    <h4>Max Wind</h4>
                                    <div>
                                        <svg
                                            className={css`
                                                margin-top: -35px;
                                            `}
                                        >
                                            <VictoryPie
                                                standalone={false}
                                                width={200}
                                                height={200}
                                                innerRadius={40}
                                                data={[
                                                    { x: '', y: detail.day.maxwind_kph, fill: '#33c5ff' },
                                                    { x: '', y: 100 },
                                                ]}
                                                colorScale={['#33c5ff', '#ffffff']}
                                            />
                                        </svg>
                                        <p
                                            className={css`
                                                text-align: center;
                                                font-size: 25px;
                                            `}
                                        >
                                            {detail.day.maxwind_kph} km/h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-precip">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>Precipitation</h4>
                            <p>Precipitation amount in inches: {detail.day.totalprecip_in} inches</p>
                            <p>Precipitation amount in millimeters: {detail.day.totalprecip_mm} millimeters</p>
                        </div>
                        <div className="detail-temperature">
                            <Divider
                                component="div"
                                className={css`
                                    border-color: #ffffff9e !important;
                                `}
                            />
                            <h4>Temperature</h4>
                            <Thermometer
                                theme="light"
                                value={detail.day.avgtemp_c}
                                max="100"
                                steps="2"
                                format="°C"
                                size="small"
                                height="200"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default DayDetail;
