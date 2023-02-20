import { SELECT_FOLDER, SELECT_NOTE } from "./constants";
export const initialState = {
  folders: [
    {
      id: 1,
      name: "folder 1",
      notes: [
        { id: 1, content: "content 1", updatedAt: "111" },
        { id: 2, content: "content 2", updatedAt: "111" },
      ],
    },
    {
      id: 2,
      name: "folder 2",
      notes: [
        { id: 1, content: "content 1", updatedAt: "111" },
        { id: 2, content: "content 2", updatedAt: "111" },
        { id: 3, content: "content 3", updatedAt: "311" },
        { id: 4, content: "content 4", updatedAt: "411" },
      ],
    },
    { id: 3, name: "folder 3", notes: [] },
    { id: 4, name: "folder 4" },
    {
      id: 5,
      name: "folder 5",
      notes: [
        { id: 1, content: "content 1", updatedAt: "111" },
        { id: 2, content: "content 2", updatedAt: "111" },
        { id: 3, content: "content 3", updatedAt: "311" },
        { id: 4, content: "content 4", updatedAt: "411" },
        { id: 5, content: "content 5", updatedAt: "111" },
        { id: 6, content: "content 6", updatedAt: "311" },
        { id: 7, content: "content 7", updatedAt: "411" },
      ],
    },
    { id: 6, name: "folder 6" },
    { id: 7, name: "folder 7" },
  ],
  selectedFolder: {
    id: 1,
    name: "folder 1",
    notes: [
      { id: 1, content: "content 1", updatedAt: "111" },
      { id: 2, content: "content 2", updatedAt: "111" },
    ],
    selectedNote: {
      id: 1,
      content: "content 1",
      updatedAt: "111",
    },
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_FOLDER:
      return changeSelectedFolder(state, action.payload);
    case SELECT_NOTE:
      return changeSelectedNote(state, action.payload);
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;

const changeSelectedFolder = (state, payload) => {
  const selectedFolder = state.folders.find((x) => x.id === payload.id);
  const selectedNote =
    selectedFolder.notes && selectedFolder.notes.length
      ? selectedFolder.notes[0]
      : {};
  return {
    ...state,
    selectedFolder: {
      ...selectedFolder,
      selectedNote: selectedNote,
    },
  };
};

const changeSelectedNote = (state, payload) => {
  const selectedNote = state.selectedFolder.notes.find(
    (x) => x.id === payload.id
  );
  return {
    ...state,
    selectedFolder: { ...state.selectedFolder, selectedNote },
  };
};
