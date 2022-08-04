/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import {
    hisWeatherDisplay,
    hisWeatherPrimaryColor,
    hisWeatherHiddenButton,
    hisWeatherActiveButton,
    hisWeatherDisplayItem,
    hisWeatherPadItem,
} from '~/common/styles.ts';
import { set_chart } from '~/features/SwapChart';

const TitleHisWeather = (props) => {
    const dispatch = useDispatch();
    const active = useSelector((state) => state.chart.value);

    return (
        <div css={hisWeatherDisplay}>
            <div>
                <h2
                    css={hisWeatherPrimaryColor}
                >{`${props.hasLocationHisWeather.name}, ${props.hasLocationHisWeather.country}`}</h2>
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
    );
};
export default TitleHisWeather;
