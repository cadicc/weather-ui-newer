/** @jsxImportSource @emotion/react */
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItemsFavWeather from './component/ListItems';
import {
    listFavDisplayCss,
    listFavItemsCss,
    textDecorationCss,
    favWeatherDefaultItem,
    favWeatherItemAdd,
    favWeatherAddIcon,
    favWeatherDisable,
} from '~/common/styles.ts';
// import { set_activeFav, set_activeHis, set_activeHome } from '~/features/activeNavBar/activeHome';
import { current_weather } from '~/features/Current';
import { get_fav } from '~/features/favorites/addFavorite';

const ListFav = () => {
    const favorites = useSelector((state) => state.addFav.value);
    const favList = useSelector((state) => state.addFav.favList);
    const dispatch = useDispatch();

    const handleDisable = () => {
        if (favList.length >= 3) {
            return favWeatherDisable;
        } else {
            return favWeatherDefaultItem;
        }
    };

    const handleCallback = useCallback(() => {
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
                    dispatch(get_fav(res.data));
                })
                .catch((err) => {
                    alert('Có lỗi!');
                    console.error(err);
                });
        });
    }, [favorites]);

    useEffect(() => {
        handleCallback();
    }, []);

    if (favList.length > 0) {
        return (
            <div css={listFavDisplayCss}>
                {favList.map((item, index) => {
                    return (
                        <div
                            css={listFavItemsCss}
                            key={index}
                            onClick={() => dispatch(current_weather(item.location.name))}
                        >
                            <Link to="/" css={textDecorationCss}>
                                <ListItemsFavWeather hasItem={item} />
                            </Link>
                        </div>
                    );
                })}
                <div css={handleDisable()}>
                    <Link to="/favorites/add-favorite">
                        <div css={favWeatherItemAdd}>
                            <AddIcon css={favWeatherAddIcon} />
                        </div>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div css={favWeatherDefaultItem}>
                <Link to="/favorites/add-favorite">
                    <div css={favWeatherItemAdd}>
                        <AddIcon css={favWeatherAddIcon} />
                    </div>
                </Link>
            </div>
        );
    }
};
export default ListFav;
