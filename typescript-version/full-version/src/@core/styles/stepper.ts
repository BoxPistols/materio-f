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
        fontWeight: 'bold',
        marginRight: theme.spacing(2.5)
      },
      '& .step-title': {
        ...theme.typography.body1,
        fontWeight: 500
      },
      '& .step-subtitle': {
        ...theme.typography.body2
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
        borderColor: `rgb(${theme.vars.palette.primary.mainChannel} / 0.12)`
      }
    },
    '& .MuiStepper-alternativeLabel': {
      '& .MuiStepConnector-root': {
        top: 10
      },
      '& .MuiStepLabel-labelContainer': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > * + *': {
          marginTop: theme.spacing(1)
        }
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
          borderRadius: 0
        }
      }
    }
  }
})

export default StepperWrapper
