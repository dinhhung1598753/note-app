import data from "~/mocks/data.json";
import { createSlice } from "@reduxjs/toolkit";
import { Folder, Note } from "index";

export type FolderState = {
  folders: Folder[];
  selected: number;
  selectedNote: number;
};

const initialState: FolderState = {
  folders: data.folders as Folder[],
  selected: 1,
  selectedNote: 1,
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
      state.selectedNote =
        state.folders.find((x) => x.id === action.payload)?.notes[0]?.id ?? 0;
    },
    addFolder(state, action) {
      let newFolderId = 1;
      if (state.folders.length > 0) {
        newFolderId = state.folders[state.folders.length - 1].id + 1;
      }
      const newFolder = {
        id: newFolderId,
        name: action.payload.name,
        notes: [
          {
            id: 1,
            content: "",
            updatedAt: new Date().getTime(),
          },
        ],
      };
      state.folders.push(newFolder);
    },

    addNote(state) {
      const selectedFolder = state.folders.find((x) => x.id === state.selected);
      if (!selectedFolder) return;
      const notes = selectedFolder.notes;
      let newNoteId = 1;
      if (notes && notes.length > 0) newNoteId = notes[notes.length - 1].id + 1;
      notes.push({
        id: newNoteId,
        content: "",
        updatedAt: new Date().getTime(),
      });
      state.selectedNote = newNoteId;
    },
    saveContent(state, action) {
      const selectedFolder = state.folders.find((x) => x.id === state.selected);
      const selectedNote = selectedFolder?.notes?.find(
        (x) => x.id === action.payload.id
      );
      if (selectedNote) {
        selectedNote.content = action.payload.content;
        selectedNote.updatedAt = new Date().getTime();
      }
    },
    changeSelectedFolder(state, action) {
      state.selected = action.payload;
      state.selectedNote = 1;
    },
    changeSelectedNote(state, action) {
      state.selectedNote = action.payload;
    },
  },
});

export const {
  setFolders,
  setSelected,
  addFolder,
  saveContent,
  addNote,
  changeSelectedNote,
  changeSelectedFolder,
} = folderSlice.actions;
export default folderSlice.reducer;
