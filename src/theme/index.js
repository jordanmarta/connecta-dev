// import { createMuiTheme } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
