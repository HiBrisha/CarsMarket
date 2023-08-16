// carSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarState } from '~types/index';

const initialState: CarState = {
    types: 'Select your car'
};

const typeCarSlice = createSlice({
    name: 'typesCar',
    initialState,
    reducers: {
        setTypes: (state, action: PayloadAction<string>) => {
            state.types = action.payload;
        },
    },
});

export const { setTypes } = typeCarSlice.actions;
export default typeCarSlice.reducer;
