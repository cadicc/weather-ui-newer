import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
        inputValue: '',
        addFavInputValue: '',
    },
    reducers: {
        set_value: (state, action) => {
            state.value = action.payload;
        },
        SET_INPUT_VALUE: (state, action) => {
            state.inputValue = action.payload;
        },
        SET_INPUT_VALUE_ADD_FAVORITE: (state, action) => {
            state.inputValue = action.payload;
        },
    },
});

export const { set_value, SET_INPUT_VALUE, SET_INPUT_VALUE_ADD_FAVORITE } = searchSlice.actions;
export default searchSlice.reducer;
