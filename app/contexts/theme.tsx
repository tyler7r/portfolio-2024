"use client";
import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple[500],
    },
    secondary: {
      main: colors.yellow.A700,
    },
  },
});

export default theme;
