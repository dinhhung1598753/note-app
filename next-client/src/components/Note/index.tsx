import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";

import draftToHtml from "draftjs-to-html";

const Note = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  const onEditorStateChange = (state: EditorState) => {
    console.log(draftToHtml(convertToRaw(state.getCurrentContent())));
    setEditorState(state);
  };
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      wrapperStyle={{ height: "100%", overflow: "hidden" }}
      editorStyle={{ height: "80%" }}
    />
  );
};

export default Note;
