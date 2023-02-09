import { List, Typography, Box } from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";
import Folder from "./Folder";

export default function Note({ folders }) {
  return (
    <List
      dense
      sx={{ padding: "10px" }}
      subheader={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            Folders
          </Typography>
          <CreateNewFolderOutlined />
        </Box>
      }
    >
      {folders.map((folder) => (
        <Folder key={folder.name} name={folder.name} />
      ))}
    </List>
  );
}
