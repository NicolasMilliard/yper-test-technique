import { combineReducers, configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
    location: locationSlice,
    search: searchSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
});

export default store;