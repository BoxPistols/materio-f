// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

const StepperWrapper = styled(Box)<BoxProps>(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      '& .MuiStepper-horizontal:not(.MuiStepper-alternativeLabel)': {
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
    },
    '& .MuiStep-root': {
      '& .MuiStepLabel-iconContainer:empty': {
        display: 'none'
      },
      '& .step-label': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      '& .step-number': {
        ...theme.typography.h4,
        marginRight: theme.spacing(2)
      },
      '& .step-title': {
        ...theme.typography.body1,
        letterSpacing: 0.15,
        fontWeight: 500
      },
      '& .step-subtitle': {
        ...theme.typography.body2,
        color: 'var(--mui-palette-text-secondary)'
      },
      '& .MuiStepLabel-root.Mui-disabled': {
        '& .step-number': {
          color: theme.vars.palette.text.disabled
        }
      },
      '& .Mui-error': {
        '& .MuiStepLabel-labelContainer, & .step-number, & .step-title, & .step-subtitle': {
          color: theme.vars.palette.error.main
        }
      }
    },
    '& .MuiStepConnector-root': {
      '& .MuiStepConnector-line': {
        borderWidth: 3,
        borderRadius: 3
      },
      '&.Mui-active, &.Mui-completed': {
        '& .MuiStepConnector-line': {
          borderColor: theme.vars.palette.primary.main
        }
      },
      '&.Mui-disabled .MuiStepConnector-line': {
        borderColor: 'var(--mui-palette-primary-lightOpacity)'
      }
    },
    '& .MuiStepper-alternativeLabel': {
      '& .MuiStepConnector-root': {
        top: 10
      },
      '& .MuiStepLabel-labelContainer': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }
    },
    '& .MuiStepper-vertical': {
      '& .MuiStep-root': {
        '& .step-label': {
          justifyContent: 'flex-start'
        },
        '& .MuiStepContent-root': {
          borderWidth: 3,
          marginLeft: theme.spacing(2.25),
          borderColor: theme.vars.palette.primary.main
        },
        '& .button-wrapper': {
          marginTop: theme.spacing(4)
        },
        '&.active + .MuiStepConnector-root .MuiStepConnector-line': {
          borderColor: theme.vars.palette.primary.main
        }
      },
      '& .MuiStepConnector-root': {
        marginLeft: theme.spacing(2.25),
        '& .MuiStepConnector-line': {
          ...(theme.direction === 'rtl' && {
            borderRightStyle: 'solid',
            borderLeftStyle: 'none',
            marginRight: theme.spacing(4)
          }),
          borderRadius: 0
        }
      }
    }
  }
})

export default StepperWrapper
