import { createTheme } from "@mui/material/styles";

import { components } from "./components";
import { typography } from "./typography";

const initTheme = {
  components,
  typography,
};

const theme = createTheme(initTheme);

export { theme };
