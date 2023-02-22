import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { folderSlice } from "./folder/slice";

const rootReducer = combineReducers({
  [folderSlice.name]: folderSlice.reducer,
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export type RootState = ReturnType<typeof rootReducer>;

export const wrapper = createWrapper(makeStore);
