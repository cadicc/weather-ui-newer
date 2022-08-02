import React, { useCallback, useEffect, useRef } from 'react';
import * as moment from 'moment';
import { css } from '@emotion/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '..hourlyWeather/';
import useAxios from '~/service/forecast';

const HourlyWeatherSliderComponent = (onSelect) => {
    const { data } = useAxios();
    let selectShowHourlyWeather = onSelect.onSelect;
    console.log(selectShowHourlyWeather);
    console.log(data);
    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 3,
        arrow: true,
    };

    return (
        <div
            // id={`hour_${index}`}
            className={css`
                padding: 5px 10px;
                padding-left: 0;
                display: flex;
                flex-flow: row;
                // background-color: #f3f3f3;
                margin: 0 20px;
                margin-left: 0;
                width: 100%;
            `}
        >
            <Slider
                {...settings}
                className={css`
                    width: 100%;
                `}
            >
                {data[0].hour.map((hours, index) => {
                    return (
                        <div
                            key={index}
                            className={css`
                                padding-left: 0;
                                margin: 0 20px;
                                width: 200px;
                                text-shadow: 2px 2px 5px #000000;
                            `}
                        >
                            <div>
                                <img
                                    src={hours.condition.icon}
                                    alt="icon-hours"
                                    className={css`
                                        width: 50px;
                                        height: 50px;
                                    `}
                                />
                            </div>
                            <div>
                                {hours.temp_c}
                                <CircleOutlinedIcon
                                    fontSize="small"
                                    className={css`
                                        position: absolute;
                                        width: 8px !important;
                                        height: 8px !important;
                                        margin: 0 3px;
                                    `}
                                />
                            </div>
                            <div
                                className={css`
                                    font-size: 12px;

                                    -o-text-overflow: ellipsis;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 1;
                                `}
                            >
                                {hours.condition.text}
                            </div>
                            <div
                                className={css`
                                    margin-top: 20px;
                                    font-size: 12px;
                                `}
                            >
                                <span>{<FontAwesomeIcon icon={faDroplet} />}</span>
                                <span
                                    className={css`
                                        margin-left: 10px;
                                    `}
                                >{`${hours.chance_of_rain} %`}</span>
                            </div>
                            <div
                                className={css`
                                    font-size: 12px;
                                `}
                            >
                                <span>{<FontAwesomeIcon icon={faWind} />}</span>
                                <span
                                    className={css`
                                        margin-left: 10px;
                                    `}
                                >{`${hours.wind_kph} km/h`}</span>
                            </div>
                            <div
                                className={css`
                                    margin-top: 20px;
                                    font-size: 12px;
                                    font-weight: bold;
                                `}
                            >
                                {moment(hours.time, 'YYYY-MM-DD hh:mm').format('hh A')}
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default HourlyWeatherSliderComponent;
