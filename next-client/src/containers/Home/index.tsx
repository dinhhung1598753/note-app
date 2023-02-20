import FolderList from "@/components/FolderList";
import NoteList from "@/components/NoteList";
import Note from "@/components/Note";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-4/6 h-4/6 bg-white rounded-lg flex">
        <div className="flex-none w-52">
          <FolderList />
        </div>
        <div className="flex-none w-52">
          <NoteList />
        </div>
        <div className="flex-1">
          <Note />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
