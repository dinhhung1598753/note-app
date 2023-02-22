import { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { selectFolders, selectSelected } from "@/store/folder/selectors";
import { addFolder, changeSelectedFolder } from "@/store/folder/slice";

const FolderList = () => {
  const folders = useSelector(selectFolders);
  const dispatch = useDispatch();
  const selectedFolderId = useSelector(selectSelected);

  const [showModal, setShowModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const createFolder = () => {
    dispatch(addFolder({ name: newFolderName }));
    setNewFolderName("");
    setShowModal(false);
  };

  const changeFolder = (id: number) => {
    dispatch(changeSelectedFolder(id));
  };
  return (
    <>
      <div className="h-full p-2">
        <div className="my-2 flex justify-between">
          <p className="text-xl font-bold">Folders</p>
          <Image
            src="/folder-plus-outline.svg"
            alt="add-folder"
            height="25"
            width="25"
            className="hover:cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        </div>
        <ul className="flex flex-col gap-2 overflow-auto h-5/6 py-2">
          {folders &&
            folders.map((folder) => (
              <li key={folder.id}>
                <div
                  className={classNames(
                    "bg-slate-500 rounded-md p-2 shadow-sm shadow-current hover:cursor-pointer truncate text-xl h-12",
                    { "bg-green-500": folder.id === selectedFolderId }
                  )}
                  onClick={() => changeFolder(folder.id)}
                >
                  {folder.name}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div
        className={classNames("relative z-10", {
          hidden: !showModal,
        })}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Create new folder
                    </h3>
                    <div className="mt-2">
                      <div className="mb-4">
                        <input
                          type="text"
                          className="border-2 border-gray-300 p-2 w-full"
                          name="title"
                          id="title"
                          required
                          value={newFolderName}
                          onChange={(e) => setNewFolderName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className={classNames(
                    "inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",
                    { "bg-green-700/50": !newFolderName },
                    { "hover:bg-green-700": !!newFolderName }
                  )}
                  disabled={!newFolderName}
                  onClick={createFolder}
                >
                  Create
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderList;
