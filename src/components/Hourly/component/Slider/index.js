/** @jsxImportSource @emotion/react */

import { faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import * as moment from 'moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
    slideCss,
    sliderItemConditionCss,
    sliderItemIconCss,
    sliderItemImagesCss,
    sliderItemsCss,
    sliderItemTempCss,
    sliderItemTempSpaceCss,
    sliderItemTimeCss,
    sliderItemWindCss,
    sliderWidthCss,
} from '~/common/styles.ts';

const SliderHourlyWeather = (props) => {
    const settings = {
        dots: false,
        infinity: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScoll: 3,
        arrow: true,
    };
    return (
        <div css={slideCss}>
            <Slider {...settings} css={sliderWidthCss}>
                {props.onForecastWeatherSlider[props.hasI].hour.map((hours, index) => {
                    return (
                        <div key={index} css={sliderItemsCss}>
                            <div>
                                <img src={hours.condition.icon} alt="icon-hours" css={sliderItemImagesCss} />
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
                            <div css={sliderItemTimeCss}>{moment(hours.time, 'YYYY-MM-DD hh:mm').format('hh A')}</div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};
export default SliderHourlyWeather;
