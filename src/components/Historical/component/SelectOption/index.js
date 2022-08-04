/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux';
import * as moment from 'moment';
import { set_historical } from '~/features/Historical';
import { hisWeatherSelectField } from '~/common/styles.ts';

const SelectOptionHisWeather = () => {
    const dispatch = useDispatch();

    return (
        <>
            <select onChange={(e) => dispatch(set_historical(e.target.value))} css={hisWeatherSelectField}>
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
        </>
    );
};
export default SelectOptionHisWeather;
