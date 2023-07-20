import { createSlice } from "@reduxjs/toolkit";

interface Filter {
    isDisplayed: boolean;
    pagination: number;
    distance: number;
}

const initialState: Filter = {
    isDisplayed: false,
    pagination: 0,
    distance: 30
};

const searchFiltersSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setIsDisplayed: (state, action) => {
            state.isDisplayed = action.payload
        },
        setPagination: (state, action) => {
            state.pagination = action.payload
        },
        setDistance: (state,action) => {
            state.distance = action.payload
        }
    }
});

export const { setIsDisplayed } = searchFiltersSlice.actions;
export const { setPagination } = searchFiltersSlice.actions;
export const { setDistance } = searchFiltersSlice.actions;

export default searchFiltersSlice.reducer;