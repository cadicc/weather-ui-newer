/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Container } from '@mui/material';
import { set_value } from '~/features/Search';
import { set_fav } from '~/features/favorites/addFavorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    FavWeatherSetScreen,
    FavWeatherDistanceScreen,
    addFavWeatherIconBack,
    addFavWeatherPositionIconBack,
    addFavWeatherAlignSearchInput,
    addFavWeatherListSearch,
    addFavWeatherPadItem,
    currentWeatherSpaceCss,
    addFavWeatherInput,
} from '~/common/styles.ts';
import useAxiosSearch from '~/service/searchApi';
import HeadlessTippy from '@tippyjs/react/headless';

const AddFavorite = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    const listFav = useSelector((state) => state.addFav.value);
    const { searchApi } = useAxiosSearch();

    useEffect(() => {
        if (listFav.length > 0) {
            localStorage.setItem('listFav', JSON.stringify(listFav));
        }
    }, [listFav]);

    const debounceDropDown = useCallback(
        debounce((e) => dispatch(set_value(e.target.value)), 1000),
        [],
    );

    return (
        <div css={FavWeatherSetScreen}>
            <Container>
                <div css={FavWeatherDistanceScreen}></div>
                <Link to="/favorites" css={addFavWeatherIconBack}>
                    <ArrowBackIcon css={addFavWeatherPositionIconBack} />
                    Back
                </Link>
                <div css={FavWeatherDistanceScreen}></div>
                <div css={addFavWeatherAlignSearchInput}>
                    <HeadlessTippy
                        interactive
                        visible={searchInput.length > 0}
                        render={(attrs) => (
                            <div className="box-search" tabIndex="-1" {...attrs}>
                                <ul css={addFavWeatherListSearch}>
                                    {searchApi.map((result) => {
                                        return (
                                            <li
                                                key={result.id}
                                                onClick={() => {
                                                    setSearchInput('');
                                                    dispatch(set_fav(result.name));
                                                    alert('Add completed');
                                                }}
                                                css={addFavWeatherPadItem}
                                            >
                                                <h4 css={currentWeatherSpaceCss}>{result.name}</h4>
                                                <p
                                                    css={currentWeatherSpaceCss}
                                                >{`${result.name}, ${result.country}`}</p>
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
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                                debounceDropDown(e);
                            }}
                            css={addFavWeatherInput}
                        />
                    </HeadlessTippy>
                </div>
            </Container>
        </div>
    );
};
export default AddFavorite;
