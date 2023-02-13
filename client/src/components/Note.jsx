import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";

export default function Note({ note }) {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });
  const onEditorStateChange = (state) => {
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
}
