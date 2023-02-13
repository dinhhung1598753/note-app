import { List, Typography, Box } from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import Folder from "./Folder";

export default function FolderList({ folders }) {
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
          <Folder key={folder.id} name={folder.name} />
        ))}
      </List>
    </>
  );
}
