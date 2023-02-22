import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { selectNotes, selectSelectedNote } from "@/store/folder/selectors";
import { addNote, changeSelectedNote } from "@/store/folder/slice";
import { format } from "date-fns";

const NoteList = () => {
  const notes = useSelector(selectNotes);
  const selectedNote = useSelector(selectSelectedNote);
  const dispatch = useDispatch();

  const addNewNote = () => {
    dispatch(addNote());
  };
  const changeNote = (id: number) => {
    dispatch(changeSelectedNote(id));
  };
  return (
    <div className="h-full p-2">
      <div className="my-2 flex justify-between">
        <p className="text-xl font-bold">Notes</p>
        <Image
          src="/note-edit-outline.svg"
          alt="add-folder"
          height="25"
          width="25"
          className="hover:cursor-pointer"
          onClick={() => addNewNote()}
        />
      </div>
      <ul className="flex flex-col gap-2 overflow-auto h-5/6 py-2">
        {notes &&
          notes.map((note) => (
            <li key={note.id}>
              <div
                className={classNames(
                  "bg-slate-500 rounded-md px-2 pt-1 shadow-sm shadow-current hover:cursor-pointer h-12 truncate flex flex-col justify-between",
                  { "bg-green-500": note.id === selectedNote }
                )}
                onClick={() => changeNote(note.id)}
              >
                <div
                  className="h-6 text-xl mr-2"
                  dangerouslySetInnerHTML={{ __html: note.content ?? "" }}
                ></div>
                <div className="flex text-xs justify-end">
                  <span>{format(note.updatedAt, "yyyy-MM-dd hh:mm")}</span>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NoteList;
