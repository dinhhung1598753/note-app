import { List, Typography, Box } from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import Folder from "./Folder";

import { useStore } from "../store/hooks";
import * as action from "../store/actions";

export default function FolderList() {
  const [state, dispatch] = useStore();
  const { folders, selectedFolder } = state;
  const selectFolder = (folderId) => {
    dispatch(action.selectFolder({ id: folderId }));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          Folders
        </Typography>
        <CreateNewFolderOutlined />
      </Box>
      <List dense sx={{ padding: "10px", height: "100%", overflow: "auto" }}>
        {folders.map((folder) => (
          <Folder
            key={folder.id}
            name={folder.name}
            selected={folder.id === selectedFolder.id}
            changeFolder={() => selectFolder(folder.id)}
          />
        ))}
      </List>
    </>
  );
}
