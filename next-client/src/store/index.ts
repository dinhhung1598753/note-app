import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { folderSlice } from "./slices/folderSlice";

const makeStore = () =>
  configureStore({
    reducer: { [folderSlice.name]: folderSlice.reducer },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
