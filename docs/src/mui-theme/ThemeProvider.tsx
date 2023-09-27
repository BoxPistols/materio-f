// React Imports
import React from "react";
import type { ReactNode } from "react";

// Docusaurus Imports
import { useColorMode } from "@docusaurus/theme-common/internal"

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import type {} from '@mui/material/themeCssVarsAugmentation'

// Type Imports
import { MainColor } from "@core/types";

// Component Imports
import ChangeMuiMode from "./ChangeMuiMode";

// Style Imports
import globalStyling from "./globalStyles";

// Theme Overrides Imports
import overrides from "@core/theme/overrides";
import colorSchemes from "@core/theme/colorSchemes";
import spacing from "@core/theme/spacing";
import shadows from "@core/theme/shadows";
import customShadows from "@core/theme/customShadows";
import typography from "@core/theme/typography";

const mainColors: MainColor = {
  light: '58 53 65',
  dark: '231 227 252',
  lightShadow: '58 53 65',
  darkShadow: '19 17 32'
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const { colorMode } = useColorMode()

  const theme = extendTheme({
    components: overrides(),
    colorSchemes: colorSchemes(mainColors),
    ...spacing,
    shape: {
      borderRadius: 6
    },
    shadows: shadows(colorMode, mainColors),
    customShadows: customShadows(colorMode, mainColors),
    typography
  });

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <GlobalStyles styles={() => globalStyling(theme)} />
        <CssBaseline />
        <ChangeMuiMode />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
