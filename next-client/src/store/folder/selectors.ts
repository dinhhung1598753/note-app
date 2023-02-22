import { createSelector } from "reselect";
import { RootState } from "../index";

const selectFolderState = (state: RootState) => state.folder;

export const selectFolders = createSelector(
  [selectFolderState],
  (state) => state.folders
);

export const selectSelected = createSelector(
  [selectFolderState],
  (state) => state.selected
);

export const selectSelectedNote = createSelector(
  [selectFolderState],
  (state) => state.selectedNote
);

export const selectNotes = createSelector(
  [selectFolders, selectSelected],
  (state, selected) => state.find((x) => x.id === selected)?.notes
);

export const selectNote = createSelector(
  [selectNotes, selectSelectedNote],
  (state, selectedNote) => state?.find((x) => x.id === selectedNote)
);
