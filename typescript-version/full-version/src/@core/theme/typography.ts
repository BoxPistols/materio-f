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
    fontSize: '2.875rem',
    fontWeight: 500,
    lineHeight: 1.4783
  },
  h2: {
    fontSize: '2.375rem',
    fontWeight: 500,
    lineHeight: 1.4737
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 500,
    lineHeight: 1.5
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.5834
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.556
  },
  h6: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: 1.6
  },
  subtitle1: {
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: 1.6
  },
  subtitle2: {
    fontSize: '0.8125rem',
    fontWeight: 500,
    lineHeight: 1.5385
  },
  body1: {
    fontSize: '0.9375rem',
    lineHeight: 1.4667
  },
  body2: {
    fontSize: '0.8125rem',
    lineHeight: 1.5385
  },
  button: {
    fontSize: '0.9375rem',
    lineHeight: 1.4667,
    textTransform: 'none'
  },
  caption: {
    fontSize: '0.8125rem',
    lineHeight: 1.3847,
    letterSpacing: '0.025rem'
  },
  overline: {
    lineHeight: 1.167,
    letterSpacing: '0.05rem'
  }
} as Theme['typography']

export default typography
