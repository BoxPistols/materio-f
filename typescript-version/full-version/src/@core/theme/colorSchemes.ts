// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { MainColor } from '@core/types'

const colorSchemes = (mainColors: MainColor): Theme['colorSchemes'] => {
  const mainLightColor = mainColors.light
  const mainDarkColor = mainColors.dark

  return {
    light: {
      palette: {
        primary: {
          main: '#8146FF',
          light: '#9564FF',
          dark: '#6C3BD6',
          contrastText: '#fff',
          mainOpacity: 'rgb(129 70 255 / 0.16)',
          lightOpacity: 'rgb(129 70 255 / 0.08)',
          darkOpacity: 'rgb(129 70 255 / 0.32)'
        },
        secondary: {
          main: '#8A8D93',
          light: '#9C9FA4',
          dark: '#4D5056',
          contrastText: '#fff',
          mainOpacity: 'rgb(138 141 147 / 0.16)',
          lightOpacity: 'rgb(138 141 147 / 0.08)',
          darkOpacity: 'rgb(138 141 147 / 0.32)'
        },
        error: {
          main: '#FF4C51',
          light: '#FF6166',
          dark: '#A33134',
          contrastText: '#fff',
          mainOpacity: 'rgb(255 76 81 / 0.16)',
          lightOpacity: 'rgb(255 76 81 / 0.08)',
          darkOpacity: 'rgb(255 76 81 / 0.32)'
        },
        warning: {
          main: '#FFB400',
          light: '#FFB547',
          dark: '#A37300',
          contrastText: '#fff',
          mainOpacity: 'rgb(255 180 0 / 0.16)',
          lightOpacity: 'rgb(255 180 0 / 0.08)',
          darkOpacity: 'rgb(255 180 0 / 0.32)'
        },
        info: {
          main: '#16B1FF',
          light: '#32BAFF',
          dark: '#0E71A3',
          contrastText: '#fff',
          mainOpacity: 'rgb(22 177 255 / 0.16)',
          lightOpacity: 'rgb(22 177 255 / 0.08)',
          darkOpacity: 'rgb(22 177 255 / 0.32)'
        },
        success: {
          main: '#56CA00',
          light: '#6AD01F',
          dark: '#378100',
          contrastText: '#fff',
          mainOpacity: 'rgb(86 202 0 / 0.16)',
          lightOpacity: 'rgb(86 202 0 / 0.08)',
          darkOpacity: 'rgb(86 202 0 / 0.32)'
        },
        text: {
          primary: `rgb(${mainLightColor} / 0.87)`,
          secondary: `rgb(${mainLightColor} / 0.6)`,
          disabled: `rgb(${mainLightColor} / 0.38)`,
          primaryChannel: mainLightColor,
          secondaryChannel: mainLightColor
        },
        divider: `rgb(${mainLightColor} / 0.16)`,
        dividerChannel: mainLightColor,
        background: {
          default: '#F4F5FA',
          paper: '#FFFFFF'
        },
        action: {
          active: `rgb(${mainLightColor} / 0.54)`,
          hover: `rgb(${mainLightColor} / 0.04)`,
          selected: `rgb(${mainLightColor} / 0.08)`,
          disabled: `rgb(${mainLightColor} / 0.26)`,
          disabledBackground: `rgb(${mainLightColor} / 0.12)`,
          focus: `rgb(${mainLightColor} / 0.12)`,
          activeChannel: mainLightColor,
          selectedChannel: mainLightColor
        },
        SnackbarContent: {
          bg: '#1A0E33',
          color: '#FFFFFF'
        },
        customColors: {
          chatBg: '#F7F6FA',
          greyLightBg: '#FAFAFA',
          tableHeaderBg: '#F6F7FB',
          tooltipBg: '#1A0E33',
          tooltipText: '#FFFFFF',
          trackBg: '#F0F2F8'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#8146FF',
          light: '#9564FF',
          dark: '#6C3BD6',
          contrastText: '#fff',
          mainOpacity: 'rgb(129 70 255 / 0.16)',
          lightOpacity: 'rgb(129 70 255 / 0.08)',
          darkOpacity: 'rgb(129 70 255 / 0.32)'
        },
        secondary: {
          main: '#8A8D93',
          light: '#9C9FA4',
          dark: '#4D5056',
          contrastText: '#fff',
          mainOpacity: 'rgb(138 141 147 / 0.16)',
          lightOpacity: 'rgb(138 141 147 / 0.08)',
          darkOpacity: 'rgb(138 141 147 / 0.32)'
        },
        error: {
          main: '#FF4C51',
          light: '#FF6166',
          dark: '#A33134',
          contrastText: '#fff',
          mainOpacity: 'rgb(255 76 81 / 0.16)',
          lightOpacity: 'rgb(255 76 81 / 0.08)',
          darkOpacity: 'rgb(255 76 81 / 0.32)'
        },
        warning: {
          main: '#FFB400',
          light: '#FFB547',
          dark: '#A37300',
          contrastText: '#fff',
          mainOpacity: 'rgb(255 180 0 / 0.16)',
          lightOpacity: 'rgb(255 180 0 / 0.08)',
          darkOpacity: 'rgb(255 180 0 / 0.32)'
        },
        info: {
          main: '#16B1FF',
          light: '#32BAFF',
          dark: '#0E71A3',
          contrastText: '#fff',
          mainOpacity: 'rgb(22 177 255 / 0.16)',
          lightOpacity: 'rgb(22 177 255 / 0.08)',
          darkOpacity: 'rgb(22 177 255 / 0.32)'
        },
        success: {
          main: '#56CA00',
          light: '#6AD01F',
          dark: '#378100',
          contrastText: '#fff',
          mainOpacity: 'rgb(86 202 0 / 0.16)',
          lightOpacity: 'rgb(86 202 0 / 0.08)',
          darkOpacity: 'rgb(86 202 0 / 0.32)'
        },
        text: {
          primary: `rgb(${mainDarkColor} / 0.87)`,
          secondary: `rgb(${mainDarkColor} / 0.6)`,
          disabled: `rgb(${mainDarkColor} / 0.38)`,
          primaryChannel: mainDarkColor,
          secondaryChannel: mainDarkColor
        },
        divider: `rgb(${mainDarkColor} / 0.16)`,
        dividerChannel: mainDarkColor,
        background: {
          default: '#28243D',
          paper: '#312D4B'
        },
        action: {
          active: `rgb(${mainDarkColor} / 0.54)`,
          hover: `rgb(${mainDarkColor} / 0.04)`,
          selected: `rgb(${mainDarkColor} / 0.08)`,
          disabled: `rgb(${mainDarkColor} / 0.26)`,
          disabledBackground: `rgb(${mainDarkColor} / 0.12)`,
          focus: `rgb(${mainDarkColor} / 0.12)`,
          activeChannel: mainDarkColor,
          selectedChannel: mainDarkColor
        },
        SnackbarContent: {
          bg: '#F7F4FF',
          color: '#312D4B'
        },
        customColors: {
          chatBg: '#373452',
          greyLightBg: '#373350',
          tableHeaderBg: '#3D3759',
          tooltipBg: '#F7F4FF',
          tooltipText: '#312D4B',
          trackBg: '#474360'
        }
      }
    }
  } as Theme['colorSchemes']
}

export default colorSchemes
