import React from "react";
import { Grid, Box, Container } from "@mui/material";

import FolderList from "../../components/FolderList";
import NoteList from "../../components/NoteList";
import Note from "../../components/Note";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Grid container sx={{ height: "500px" }}>
        <Grid item xs={3} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#ccc", height: "100%", overflow: "auto" }}
          >
            <FolderList />
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#fff", height: "100%", overflow: "auto" }}
          >
            <NoteList />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ height: "100%" }}>
          <Box
            sx={{ backgroundColor: "#fff", height: "100%", overflow: "hidden" }}
          >
            <Note note={{ id: 1, content: "123" }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
