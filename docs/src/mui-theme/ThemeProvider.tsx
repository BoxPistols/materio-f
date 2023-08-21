// React Imports
import React from "react";
import type { ReactNode } from "react";

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import type {} from '@mui/material/themeCssVarsAugmentation'

// Component Imports
import ChangeMuiMode from "./ChangeMuiMode";

// Style Imports
import globalStyling from "./globalStyles";

// Theme Overrides Imports
import spacing from "../../../typescript-version/full-version/src/@core/theme/spacing";
import overrides from "../../../typescript-version/full-version/src/@core/theme/overrides";

const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const theme = extendTheme({
    ...spacing,
    components: overrides()
  });

  return (
    <CssVarsProvider theme={theme}>
      <GlobalStyles styles={() => globalStyling(theme)} />
      <CssBaseline />
      <ChangeMuiMode />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;