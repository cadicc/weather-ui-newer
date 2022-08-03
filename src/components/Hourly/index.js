/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Divider from '@mui/material/Divider';
import { set_chartHourly } from '~/features/SwapHourly';
// import './index.css';
import VictoryAreaChart from './component/Chart/index';
import { buttonDetailCss, buttonSummaryCss, hourlyCss, buttonIconCss, dividerCss, hourlySliderCss } from './style.ts';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SliderHourlyWeather from './component/Slider/index';

const HourlyWeather = (props) => {
    const showHourly = useSelector((state) => state.hourly.data);
    const swapChart = useSelector((state) => state.chartHourly.value);
    const dispatch = useDispatch();
    let selectHourly = useSelector((state) => state.hourly.selectHour);
    const hourlyRef = useRef();

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
    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 3,
        arrow: true,
    };

    const handleRenderHourlyWeatherSecondWay = () => {
        for (let i = 0; i < props.onForecastWeatherHourly.length; i++) {
            if (i === selectHourly) {
                return <SliderHourlyWeather onForecastWeatherSlider={props.onForecastWeatherHourly} hasI={i} />;
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            // handleRenderHourlyWeather(showHourly);
        }, 100);
    }, [showHourly]);

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
                    <VictoryAreaChart onData={props.onForecastWeatherHourly} />
                )}
            </div>
        </div>
    );
};

export default HourlyWeather;
