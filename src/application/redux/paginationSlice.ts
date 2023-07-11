import { createSlice } from "@reduxjs/toolkit";

interface Pagination {
    pagination: number;
}

const initialState: Pagination = {
    pagination: 0
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        setPagination: (state, action) => {
            state.pagination = action.payload
        }
    }
});

export const { setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;