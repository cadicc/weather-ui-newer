/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useAxios from '~/service/forecast';
import Divider from '@mui/material/Divider';
import * as moment from 'moment';
// import { css } from '@emotion/css';
import { css, jsx } from '@emotion/react/macro';
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import { set_chartHourly } from '~/features/SwapHourly';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
// import clsx from 'clsx';
import {
    slideCss,
    sliderWidthCss,
    sliderItemsCss,
    sliderItemImagesCss,
    buttonDetailCss,
    buttonSummaryCss,
    hourlyCss,
    buttonIconCss,
    dividerCss,
    hourlySliderCss,
    sliderItemIconCss,
    sliderItemConditionCss,
    sliderItemTempCss,
    sliderItemTempSpaceCss,
    sliderItemWindCss,
    sliderItemTimeCss,
    chartFontSizeCss,
} from './style.ts';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
// import HourlyWeatherSliderComponent from './component/hourlyWeather/index';

const HourlyWeather = (selectHourlyWeather) => {
    const { data } = useAxios();
    let dataChart = data.map((result) => {
        return result.hour.map((temp) => {
            return {
                x: moment(temp.time, 'YYYY-MM-DD hh:mm').format('hh A'),
                y: temp.temp_c,
            };
        });
    });
    const showHourly = useSelector((state) => state.hourly.data);
    const swapChart = useSelector((state) => state.chartHourly.value);
    const dispatch = useDispatch();
    const hourlyRef = useRef();

    let selectHourly = selectHourlyWeather.selectHourlyWeather;

    // const handleRenderHourlyWeather = useCallback((showHourly) => {
    //     if (showHourly > hourlyRef.current.children.length) {
    //         return;
    //     }

    //     for (let i = 0; i < hourlyRef.current.children.length; i++) {
    //         if (i === showHourly) {
    //             hourlyRef.current.children[i].style.display = 'flex';
    //             continue;
    //         }
    //         hourlyRef.current.children[i].style.display = 'none';
    //     }
    // }, []);

    const handleRenderHourlyWeatherSecondWay = useCallback(() => {
        for (let i = 0; i < data.length; i++) {
            if (i === selectHourly) {
                return (
                    // <HourlyWeatherSliderComponent onSelect={i} />
                    <div
                        // id={`hour_${index}`}
                        css={slideCss}
                    >
                        <Slider {...settings} css={sliderWidthCss}>
                            {data[i].hour.map((hours, index) => {
                                return (
                                    <div key={index} css={sliderItemsCss}>
                                        <div>
                                            <img
                                                src={hours.condition.icon}
                                                alt="icon-hours"
                                                css={sliderItemImagesCss}
                                            />
                                        </div>
                                        <div>
                                            {hours.temp_c}
                                            <CircleOutlinedIcon fontSize="small" css={sliderItemIconCss} />
                                        </div>
                                        <div css={sliderItemConditionCss}>{hours.condition.text}</div>
                                        <div css={sliderItemTempCss}>
                                            <span>{<FontAwesomeIcon icon={faDroplet} />}</span>
                                            <span css={sliderItemTempSpaceCss}>{`${hours.chance_of_rain} %`}</span>
                                        </div>
                                        <div css={sliderItemWindCss}>
                                            <span>{<FontAwesomeIcon icon={faWind} />}</span>
                                            <span css={sliderItemTempSpaceCss}>{`${hours.wind_kph} km/h`}</span>
                                        </div>
                                        <div css={sliderItemTimeCss}>
                                            {moment(hours.time, 'YYYY-MM-DD hh:mm').format('hh A')}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                );
            }
        }
    }, [selectHourlyWeather]);

    useEffect(() => {
        setTimeout(() => {
            // handleRenderHourlyWeather(showHourly);
        }, 100);
    }, [showHourly]);

    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 3,
        arrow: true,
    };

    return (
        <div>
            <div css={hourlyCss}>
                <div>
                    <h2>Hourly</h2>
                </div>
                <div>
                    <button
                        onClick={() => dispatch(set_chartHourly(false))}
                        css={!swapChart ? buttonDetailCss : buttonSummaryCss}
                    >
                        <span css={buttonIconCss}>
                            <InsertChartIcon fontSize="small" />
                        </span>
                        <span>Summary</span>
                    </button>
                    <button
                        onClick={() => dispatch(set_chartHourly(true))}
                        css={swapChart ? buttonDetailCss : buttonSummaryCss}
                    >
                        <span css={buttonIconCss}>
                            <ListAltIcon fontSize="small" />
                        </span>
                        <span>Detail</span>
                    </button>
                </div>
            </div>
            <Divider component="div" css={dividerCss} />
            <div ref={hourlyRef} css={hourlySliderCss}>
                {swapChart === true ? (
                    handleRenderHourlyWeatherSecondWay(selectHourly)
                ) : (
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
                )}
            </div>
        </div>
    );
};

// HourlyWeather.prototype = {};

export default HourlyWeather;
