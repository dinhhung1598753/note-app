import { SELECT_FOLDER, SELECT_NOTE } from "./constants";
export const selectFolder = (payload) => {
  return {
    type: SELECT_FOLDER,
    payload,
  };
};

export const selectNote = (payload) => {
  return {
    type: SELECT_NOTE,
    payload,
  };
};
