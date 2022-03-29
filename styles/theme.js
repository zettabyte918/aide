import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#29738B",
    },
    secondary: {
      main: "#939393",
    },
    error: {
      main: red.A400,
    },

  },
});

export default theme