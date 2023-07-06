import { createSlice } from "@reduxjs/toolkit";

export type Search = {
    isSearching: boolean;
}

const initialState: Search = {
    isSearching: false
}

const searchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setSearch: (state, action) => {
            state.isSearching = action.payload
        }
    }
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;