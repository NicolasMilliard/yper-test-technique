import { createSlice } from "@reduxjs/toolkit";

export type Location = {
    value: {
        lat: number,
        lng: number
    }
}

const initialState: Location = {
    value: {
        lat: 0,
        lng: 0
    }
}

const locationSlice = createSlice({
    name: "location",
    initialState: initialState,
    reducers: {
        setLocation: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;