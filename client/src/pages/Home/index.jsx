import React from "react";
import { Grid, Box, Container } from "@mui/material";

import FolderList from "../../components/FolderList";
import NoteList from "../../components/NoteList";
import Note from "../../components/Note";

const folders = [
  { id: 1, name: "folder 1" },
  { id: 2, name: "folder 2" },
  { id: 3, name: "folder 3" },
  { id: 4, name: "folder 4" },
  { id: 5, name: "folder 5" },
  { id: 6, name: "folder 6" },
  { id: 7, name: "folder 7" },
  { id: 9, name: "folder 9" },
];

const notes = [
  { id: 1, title: "note 1" },
  { id: 2, title: "note 2" },
  { id: 3, title: "note 3" },
  { id: 4, title: "note 4" },
  { id: 5, title: "note 5" },
  { id: 6, title: "note 6" },
  { id: 7, title: "note 7" },
  { id: 8, title: "note 8" },
  { id: 9, title: "note 9" },
];

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid container sx={{ height: "500px" }}>
        <Grid item xs={3} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#ccc", height: "100%", overflow: "auto" }}
          >
            <FolderList folders={folders} />
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#fff", height: "100%", overflow: "auto" }}
          >
            <NoteList notes={notes} />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#fff", height: "100%", overflow: "hidden" }}
          >
            <Note />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
