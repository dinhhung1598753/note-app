import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";

import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import { selectNote } from "@/store/folder/selectors";
import { saveContent } from "@/store/folder/slice";

const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);

const Note = () => {
  const note = useSelector(selectNote);
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty();
  });

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note?.content ?? "");
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(state));
  }, [note]);

  const onEditorStateChange = (state: EditorState) => {
    const content = draftToHtml(convertToRaw(state.getCurrentContent()));
    setEditorState(state);
    if (note) dispatch(saveContent({ id: note.id, content }));
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
