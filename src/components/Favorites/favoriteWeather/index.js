/** @jsxImportSource @emotion/react */
import ListFav from '../listFav';
import { hisWeatherPrimaryColor, favWeatherlistFav } from '~/common/styles.ts';

const FavoritesWeather = () => {
    return (
        <div css={hisWeatherPrimaryColor}>
            <h2>Favorites Weather</h2>
            <div>
                <div css={favWeatherlistFav}>
                    <ListFav />
                </div>
            </div>
        </div>
    );
};
export default FavoritesWeather;
