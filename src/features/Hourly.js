import { createSlice } from '@reduxjs/toolkit';

export const hourlySlice = createSlice({
    name: 'hourly',
    initialState: {
        data: 0,
        dataHour: 0,
        selectHour: 0,
    },
    reducers: {
        get_hour: (state, action) => {
            state.data = action.payload;
            state.dataHour = action.payload;
        },
        SELECT_HOUR: (state, action) => {
            state.selectHour = action.payload;
        },
    },
});

export const { get_hour, SELECT_HOUR } = hourlySlice.actions;
export default hourlySlice.reducer;
