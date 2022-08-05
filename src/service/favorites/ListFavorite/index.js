import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useAxiosListFavorites = () => {
    const [getListFavorites, setGetListFavorites] = useState([]);
    const favorites = useSelector((state) => state.addFav.value);
    const dispatch = useDispatch();
    const fetchData = () => {
        favorites.map((fav) => {
            return axios
                .get(`https://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105&`, {
                    params: {
                        q: fav,
                        aqi: 'yes',
                    },
                })
                .then((res) => {
                    localStorage.setItem('nameFav', JSON.stringify(res.data));
                    // dispatch(get_fav(res.data));
                    if (
                        Object.keys(getListFavorites).length <
                        Object.keys(JSON.parse(localStorage.getItem('listFav'))).length
                    ) {
                        setGetListFavorites([...getListFavorites, res.data]);
                    }
                })
                .catch((err) => {
                    alert('Có lỗi!');
                    console.error(err);
                });
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    return { getListFavorites };
};
export default useAxiosListFavorites;
