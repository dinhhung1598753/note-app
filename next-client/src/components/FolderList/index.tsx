import Image from "next/image";

const FolderList = () => {
  return (
    <div className="h-full p-2">
      <div className="my-2 flex justify-between">
        <p className="text-xl font-bold">Folders</p>
        <Image
          src="/folder-plus-outline.svg"
          alt="add-folder"
          height="25"
          width="25"
          className="hover:cursor-pointer"
        />
      </div>
      <ul className="flex flex-col gap-2 overflow-auto h-5/6 py-2">
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
        <li>
          <div className="bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer">
            1
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FolderList;
