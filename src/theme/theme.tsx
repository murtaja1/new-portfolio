import { Palette, PaletteOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Theme {
    palette: Palette;
    typography: Typography;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
      light: "#3f51b5",
    },
    secondary: {
      main: "#eeeeee",
      light: "#2f2f2f",
    },
    text: {
      primary: "#cacaca",
      secondary: "#8a8a8a",
    },
  },
  typography: {
    h1:{
      fontSize: "50px",
      fontWeight: '400'
    }, 
    h2:{
      fontSize: "20px",
      fontWeight: '400'
      
    },  
    h3:{
      fontSize: "17px",
      fontWeight: '400'
    }, 
    h4:{
      fontSize: "17px",
      fontWeight: '300'
    }, 
    h5:{
      fontSize: "12px",
      fontWeight: '400'
    }, 
    h6:{
      fontSize: "11px",
      fontWeight: '300'
    },
    button: {
      textTransform: "none",
    },
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
