import {
  List,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";

export default function Note({ notes }) {
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
      {notes.map((note) => (
        <Card sx={{ maxWidth: 345, marginBottom: "5px" }}>
          <CardActionArea>
            <CardContent sx={{ padding: "10px" }}>
              <Typography variant="body1" color="text.secondary">
                {note.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </List>
  );
}
