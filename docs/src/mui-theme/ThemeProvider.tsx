// React Imports
import React from "react";
import type { ReactNode } from "react";

// Docusaurus Imports
import { useColorMode } from "@docusaurus/theme-common/internal"

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider,
  responsiveFontSizes
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/lab/themeAugmentation';

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

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const { colorMode } = useColorMode()

  let theme = extendTheme({
    components: overrides('default'),
    colorSchemes: colorSchemes('default'),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(colorMode),
    customShadows: customShadows(colorMode),
    typography,
    mainColorChannels: {
      light: '46 38 61',
      dark: '231 227 252',
      lightShadow: '46 38 61',
      darkShadow: '19 17 32'
    }
  });

  theme = responsiveFontSizes(theme)

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
