import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Types
import { SearchResultsInterface } from "application/types/Search";

const initialState: SearchResultsInterface[] = [];

const resultsSlice = createSlice({
    name: "results",
    initialState: initialState,
    reducers: {
        setResults: (state, action: PayloadAction<SearchResultsInterface[]>) => {
            return action.payload;
          },
    }
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;