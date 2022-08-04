/** @jsxImportSource @emotion/react */
import { Container } from '@mui/material';
import CurrentWeather from '~/components/Favorites/currentWeather';
import FavoritesWeather from '~/components/Favorites/favoriteWeather';
import { FavWeatherSetScreen, FavWeatherDistanceScreen } from '~/common/styles.ts';

const Favorites = () => {
    return (
        <div css={FavWeatherSetScreen}>
            <Container>
                <div css={FavWeatherDistanceScreen}></div>
                <CurrentWeather />
                <FavoritesWeather />
            </Container>
        </div>
    );
};
export default Favorites;
