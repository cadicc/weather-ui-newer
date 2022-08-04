import { createSlice } from '@reduxjs/toolkit';

export const activeNavSlice = createSlice({
    name: 'activeNav',
    initialState: {
        home: true,
        history: false,
        favorite: false,
    },
    reducers: {
        SET_HOME_ACTIVE: (state, action) => {
            state.home = action.payload;
            state.history = !action.payload;
            state.favorite = !action.payload;
        },
        SET_HISTORY_ACTIVE: (state, action) => {
            state.history = action.payload;
            state.home = !action.payload;
            state.favorite = !action.payload;
        },
        SET_FAVORITE_ACTIVE: (state, action) => {
            state.favorite = action.payload;
            state.home = !action.payload;
            state.history = !action.payload;
        },
    },
});

export const { SET_HOME_ACTIVE, SET_HISTORY_ACTIVE, SET_FAVORITE_ACTIVE } = activeNavSlice.actions;
export default activeNavSlice.reducer;
