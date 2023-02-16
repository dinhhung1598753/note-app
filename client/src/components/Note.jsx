import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";

import draftToHtml from "draftjs-to-html";

export default function Note({ note }) {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });
  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note.id]);
  
  const onEditorStateChange = (state) => {
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
}
