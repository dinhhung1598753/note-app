import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import router from "./router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import AppProvider from "./store/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Container
        sx={{
          maxWidth: "100% !important",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('/bg.jpeg')",
        }}
      >
        <RouterProvider router={router} />
      </Container>
    </AppProvider>
  </React.StrictMode>
);
