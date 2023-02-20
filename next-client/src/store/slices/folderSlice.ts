import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  selected: 0,
};
export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolders(state, action) {
      state.folders = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setFolders, setSelected } = folderSlice.actions;
export default folderSlice.reducer;
