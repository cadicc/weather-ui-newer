import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState([]);
    // const data = useRef([]);
    const currentWeather = useSelector((state) => state.current.value);
    const fetchData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: currentWeather,
                    days: 10,
                    aqi: 'yes',
                    alerts: 'no',
                },
            })
            .then((res) => {
                // data.current = res?.data?.forecast?.forecastday || [];
                setData(res.data.forecast.forecastday);
            })
            .catch((err) => {
                alert('Có lỗi!');
            })
            .finally(() => {});
    };
    useEffect(() => {
        fetchData();
    }, [currentWeather]);
    // return { data: data.current };
    return { data };
};
export default useAxios;
