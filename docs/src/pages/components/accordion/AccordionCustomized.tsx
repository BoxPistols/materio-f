// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import type { AccordionProps } from '@mui/material/Accordion'
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import type { AccordionDetailsProps } from '@mui/material/AccordionDetails'

// Styled component for Accordion component
const Accordion = styled(MuiAccordion)<AccordionProps>(({ theme }) => ({
  boxShadow: 'none !important',
  border: `1px solid ${theme.palette.divider} !important`,
  borderRadius: '0 !important',
  overflow: 'hidden',
  '&:not(:last-of-type)': {
    borderBottom: '0 !important'
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    borderTopLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderTopRightRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderBottomRightRadius: 'var(--mui-shape-borderRadius) !important'
  }
}))

// Styled component for AccordionSummary component
const AccordionSummary = styled(MuiAccordionSummary)<AccordionSummaryProps>(({ theme }) => ({
  marginBottom: -1,
  transition: 'none',
  backgroundColor: 'var(--mui-palette-customColors-greyLightBg)',
  borderBottom: `1px solid ${theme.palette.divider} !important`
}))

// Styled component for AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)<AccordionDetailsProps>(({ theme }) => ({
  padding: `${theme.spacing(4)} !important`
}))

const AccordionCustomized = () => {
  // States
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const expandIcon = (value: string) => <i className={expanded === value ? 'ri-subtract-line' : 'ri-add-line'} />

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          id='customized-panel-header-1'
          expandIcon={expandIcon('panel1')}
          aria-controls='customized-panel-content-1'
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wafer sesame snaps chocolate bar candy canes halvah. Cupcake sesame snaps sweet tart dessert biscuit.
            Topping soufflé tart sweet croissant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          id='customized-panel-header-2'
          expandIcon={expandIcon('panel2')}
          aria-controls='customized-panel-content-2'
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sugar plum sesame snaps caramels. Cake pie tart fruitcake sesame snaps donut cupcake macaroon. Gingerbread
            pudding cheesecake pie ice cream.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          id='customized-panel-header-3'
          expandIcon={expandIcon('panel3')}
          aria-controls='customized-panel-content-3'
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gingerbread lemon drops bear claw gummi bears bonbon wafer jujubes tiramisu. Jelly pie cake. Sweet roll
            dessert sweet pastry powder.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default AccordionCustomized
