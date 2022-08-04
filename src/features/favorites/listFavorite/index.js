import axios from 'axios';

const useAxiosListFavorites = () => {
    const fetchFavData = () => {
        axios
            .get(`https://api.weatherapi.com/v1/current.json?key=f0106112791a4d5486c104334223105&`, {
                params: {
                    q: 'Paris',
                    aqi: 'yes',
                },
            })
            .then((res) => {
                getListFav(res.data);
            })
            .catch((err) => {
                throw new Error('Sai cu phap', err);
            });
    };
};
