import {
  List,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { CreateNewFolderOutlined } from "@mui/icons-material";

import { useStore } from "../store/hooks";

import * as action from "../store/actions";

export default function NoteList() {
  const [state, dispatch] = useStore();
  const { selectedFolder } = state;
  const changeNote = (noteId) => {
    return dispatch(action.selectNote({ id: noteId }));
  };
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
      {selectedFolder.notes.map((note) => (
        <Card
          sx={{
            maxWidth: 345,
            marginBottom: "5px",
            ...{
              backgroundColor:
                selectedFolder.selectedNote.id === note.id ? "#d0d288" : "",
            },
          }}
          key={note.id}
          onClick={() => changeNote(note.id)}
        >
          <CardActionArea>
            <CardContent sx={{ padding: "10px" }}>
              <Typography variant="body1" color="text.secondary">
                {note.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </List>
  );
}
