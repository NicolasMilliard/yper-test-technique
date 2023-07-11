import { createSlice } from "@reduxjs/toolkit";

interface Search {
    isSearching: boolean;
}

const initialState: Search = {
    isSearching: false
};

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