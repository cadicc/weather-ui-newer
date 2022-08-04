/** @jsxImportSource @emotion/react */
import * as moment from 'moment';
import { useEffect } from 'react';
// import { css } from '@emotion/react';
import useAxiosCurrent from '~/service/currentApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import AirIcon from '@mui/icons-material/Air';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import {
    currentWeatherCss,
    currentWeatherAlignCss,
    currentWeatherTempFielCss,
    tempWeatherBiggerCss,
    currentWeatherSpaceCss,
    currentWeatherLineCss,
    currentWeatherFeelLikeCss,
    currentWeatherWindCss,
    currentWeatherTextCss,
    dailyItemCircleIconCss,
    currentWindIconCss,
} from '~/common/styles.ts';
import { TYPE_BIG } from '~/common/day';

const CurrentWeather = (props) => {
    let checkObj = Object.keys(props.onCurrent).length === 0;

    const handleTempCss = () => {
        if (props.type === TYPE_BIG) {
            return tempWeatherBiggerCss;
        }
    };

    if (checkObj === false) {
        return (
            <div>
                <div css={currentWeatherCss}>
                    <div>
                        <div css={currentWeatherAlignCss}>
                            <p>{`${props.hasLocation}, ${props.hasCountry}`}</p>
                            <div css={currentWeatherTempFielCss}>
                                <img alt="icon-weather" src={props.onCurrent.condition.icon}></img>
                                <p css={handleTempCss()}>{props.hasTempC}</p>
                                <FontAwesomeIcon icon={faCircle} css={currentWindIconCss} />
                            </div>
                            <p css={currentWeatherSpaceCss}>{props.onCurrent.condition.text}</p>
                            <p css={currentWeatherSpaceCss}>
                                {`Updated as of ${moment(props.hasLastUpdate, 'YYYY-MM-DD hh:mm').format('hh:mm A')}`}
                            </p>
                            <div css={currentWeatherLineCss}>
                                <span css={currentWeatherFeelLikeCss}>
                                    <p>{`Feels Like ${props.hasFeelLike} `}</p>
                                    <CircleOutlinedIcon fontSize="small" css={dailyItemCircleIconCss} />
                                </span>
                                <div css={currentWeatherWindCss}>
                                    <span>
                                        Wind <AirIcon fontSize="small" />
                                    </span>
                                    <span>
                                        <p css={currentWeatherTextCss}>{`${props.hasWind} km/h`}</p>
                                    </span>
                                </div>
                                <p css={currentWeatherTextCss}>{`Visibility ${props.hasVis} km`}</p>
                            </div>
                            <div css={currentWeatherLineCss}>
                                <p css={currentWeatherTextCss}>{`Barometer ${props.hasPressure} mb`}</p>
                                <p css={currentWeatherTextCss}>{`Humidity ${props.hasHumidity}%`}</p>
                                <p css={currentWeatherTextCss}>{`Precipitation ${props.hasPrecip_mm} mm`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        <></>;
    }
};

export default CurrentWeather;
