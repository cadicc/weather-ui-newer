/** @jsxImportSource @emotion/react */
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { set_value, SET_INPUT_VALUE_ADD_FAVORITE } from '~/features/Search';
import { set_fav } from '~/features/favorites/addFavorite';
import useAxiosSearch from '~/service/searchApi';
import HeadlessTippy from '@tippyjs/react/headless';
import {
    addFavWeatherAlignSearchInput,
    addFavWeatherListSearch,
    addFavWeatherPadItem,
    currentWeatherSpaceCss,
    addFavWeatherInput,
} from '~/common/styles.ts';

const SearchFavoriteWeather = () => {
    const InputValue = useSelector((state) => state.search.addFavInputValue);
    const dispatch = useDispatch();
    const { searchApi } = useAxiosSearch();
    const debounceDropDown = useCallback(
        debounce((e) => dispatch(SET_INPUT_VALUE_ADD_FAVORITE(e.target.value)), 1000),
        [],
    );
    return (
        <div css={addFavWeatherAlignSearchInput}>
            <HeadlessTippy
                interactive
                visible={InputValue.length > 0}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <ul css={addFavWeatherListSearch}>
                            {searchApi.map((result) => {
                                return (
                                    <li
                                        key={result.id}
                                        onClick={() => {
                                            dispatch(SET_INPUT_VALUE_ADD_FAVORITE(''));
                                            dispatch(set_fav(result.name));
                                            alert('Add completed');
                                        }}
                                        css={addFavWeatherPadItem}
                                    >
                                        <h4 css={currentWeatherSpaceCss}>{result.name}</h4>
                                        <p css={currentWeatherSpaceCss}>{`${result.name}, ${result.country}`}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            >
                <input
                    placeholder="Tìm kiếm"
                    // ref={searchRef}
                    type="text"
                    value={InputValue}
                    onChange={(e) => {
                        dispatch(SET_INPUT_VALUE_ADD_FAVORITE(e.target.value));
                        debounceDropDown(e);
                    }}
                    css={addFavWeatherInput}
                />
            </HeadlessTippy>
        </div>
    );
};
export default SearchFavoriteWeather;
