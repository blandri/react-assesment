import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import  ReactDOM  from "react-dom/client";
import { App } from "./App";

const theme = createTheme({
    palette: {
        primary: {
          main: '#26AAE1',
          text: '#fff'
        },
        secondary: {
          main: 'rgba(38, 170, 225, 0.04)',
          text: '#fff'
        }
    }
  });

const app = ReactDOM.createRoot(document.getElementById('app'));

app.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    );
