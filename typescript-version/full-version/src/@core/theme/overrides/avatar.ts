// MUI Imports
import type { Theme } from '@mui/material/styles'

const avatar: Theme['components'] = {
  MuiAvatarGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        justifyContent: 'flex-end',
        '& .MuiAvatar-root': {
          borderColor: 'var(--mui-palette-background-paper)'
        },
        '&.pull-up .MuiAvatar-root': {
          cursor: 'pointer',
          transition: theme.transitions.create(['box-shadow', 'transform'], {
            easing: 'ease',
            duration: theme.transitions.duration.shorter
          }),
          '&:hover': {
            zIndex: 2,
            boxShadow: 'var(--mui-customShadows-md)',
            transform: 'translateY(-5px)'
          }
        }
      })
    }
  },
  MuiAvatar: {
    styleOverrides: {
      colorDefault: {
        color: 'var(--mui-palette-text-primary)',
        fontSize: '1.125rem',
        lineHeight: 1.12
      }
    }
  }
}

export default avatar
