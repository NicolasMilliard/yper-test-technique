import { combineReducers, configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import searchSlice from "./searchSlice";
import resultsSlice from "./resultsSlice";
import searchFiltersSlice from "./searchFiltersSlice";

const rootReducer = combineReducers({
    location: locationSlice,
    search: searchSlice,
    results: resultsSlice,
    filters: searchFiltersSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
});

export default store;