import React from "react";
import { Grid, Box, Container } from "@mui/material";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import FolderList from "../../components/FolderList";
import NoteList from "../../components/NoteList";

const folders = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "11" },
  { name: "12" },
  { name: "13" },
];

const notes = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "10" },
  { title: "11" },
  { title: "12" },
  { title: "13" },
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
            <Editor
              wrapperStyle={{ height: "100%", overflow: "hidden" }}
              editorStyle={{ height: "80%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
