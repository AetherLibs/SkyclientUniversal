import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../style";
import Alpha from "./dev/Alpha";

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <main>
          {/* This is where your app content should go */}
          <Alpha />
        </main>
      </Box>
    </ThemeProvider>
  );
}