/** @jsxImportSource @emotion/react */
import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import HeadlessTippy from '@tippyjs/react/headless';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { set_value, SET_INPUT_VALUE } from '~/features/Search';
import { current_weather } from '~/features/Current';
import useAxiosSearch from '~/service/searchApi';
import {
    headerPosition,
    headerTitleWidth,
    headerTitleFontSize,
    headerSearchWidth,
    headerSearchPosition,
    headerSearchPadding,
    headerSearchList,
    addFavWeatherPadItem,
    currentWeatherSpaceCss,
    headerSearchIcon,
    headerSearchIconColor,
    headerSearchInput,
} from '~/common/styles.ts';

const HeaderTitleAndSearch = () => {
    const InputValue = useSelector((state) => state.search.inputValue);
    const title = useSelector((state) => state.switch.value);
    const searchRef = useRef();
    const dispatch = useDispatch();
    const { searchApi } = useAxiosSearch();
    const debounceDropDown = useCallback(
        debounce((e) => dispatch(set_value(e.target.value)), 1000),
        [],
    );
    return (
        <div css={headerPosition}>
            <div css={headerTitleWidth}>
                <div css={headerTitleFontSize}>{title}</div>
            </div>
            <div css={headerSearchWidth}>
                <div css={headerSearchPosition}>
                    <div css={headerSearchPadding}>
                        <HeadlessTippy
                            interactive
                            visible={InputValue.length > 0}
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    <ul css={headerSearchList}>
                                        {searchApi.map((result) => {
                                            return (
                                                <li
                                                    key={result.id}
                                                    onClick={() => {
                                                        dispatch(current_weather(result.name));
                                                        dispatch(SET_INPUT_VALUE(''));
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
                                ref={searchRef}
                                type="text"
                                value={InputValue}
                                onChange={(e) => {
                                    dispatch(SET_INPUT_VALUE(e.target.value));
                                    debounceDropDown(e);
                                    searchRef.current.focus();
                                }}
                                css={headerSearchInput}
                            ></input>
                        </HeadlessTippy>
                        <IconButton
                            aria-label="Search"
                            size="small"
                            onClick={() => dispatch(current_weather(InputValue))}
                            css={headerSearchIcon}
                        >
                            <FontAwesomeIcon icon={faSearch} inverse css={headerSearchIconColor} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderTitleAndSearch;
