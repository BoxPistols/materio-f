// MUI Imports
import type { Theme } from '@mui/material/styles'

const typography: Theme['typography'] = {
  fontFamily: [
    'Inter',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  h1: {
    fontWeight: 500
  },
  h2: {
    fontWeight: 500
  },
  h3: {
    fontWeight: 500
  },
  h4: {
    fontWeight: 500
  },
  h5: {
    fontWeight: 500
  },
  h6: {
    fontWeight: 500,
    lineHeight: 1.4
  },
  subtitle2: {
    lineHeight: 1.43
  },
  body2: {
    lineHeight: 1.572
  },
  button: {
    lineHeight: 1.429,
    textTransform: 'none'
  },
  caption: {
    lineHeight: 1.167
  },
  overline: {
    lineHeight: 1.167,
    letterSpacing: '1px'
  }
} as Theme['typography']

export default typography
