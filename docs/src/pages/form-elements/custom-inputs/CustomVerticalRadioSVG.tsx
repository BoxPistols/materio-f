// React Imports
import { ChangeEvent, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputVerticalData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputVertical from '@docComponents/custom-inputs/Vertical'

// Icons Imports
import Logo from '@site/static/images/logo.svg'

type Data = Omit<CustomInputVerticalData, 'asset'>

const data: Data[] = [
  {
    value: 'starter',
    title: 'Starter',
    isSelected: true,
    content: 'A simple start for everyone.',
  },
  {
    value: 'standard',
    title: 'Standard',
    content: 'For small to medium businesses.',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    content: 'Solution for big organizations.',
  },
]

const SVGs = [
  {
    asset: (
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z'
          fill='#FF4C51'
          fill-opacity='0.16'
        />
        <path
          d='M16.8617 27.9399C16.7846 28.4256 16.3658 28.7831 15.8741 28.7831H12.0423C11.1956 28.7849 10.5077 28.1 10.5059 27.2533C10.5057 27.1677 10.5127 27.0823 10.5267 26.998L13.1166 10.5917C13.2638 9.67626 14.0526 9.00235 14.9798 8.99988H21.1937C23.7542 8.99988 25.6019 9.62 26.6859 10.8426C27.7325 12.0485 28.1346 13.6845 27.766 15.2382C27.7445 15.3729 27.723 15.5087 27.6908 15.6562C26.8675 19.8739 24.0355 22.1132 19.5052 22.1132H17.7865L16.8617 27.9399Z'
          fill='#FFA2A5'
        />
        <path
          d='M28.4165 15.1043C28.2504 14.9183 28.0678 14.7485 27.8715 14.5963C27.8496 14.8109 27.8166 15.0253 27.7661 15.2381C27.7446 15.3729 27.7231 15.5086 27.6909 15.6561C26.8677 19.8738 24.0356 22.1131 19.5054 22.1131H17.7866L16.8619 27.9398C16.7848 28.4255 16.366 28.7831 15.8742 28.7831H14.7065L14.6245 29.3035C14.6126 29.3792 14.6064 29.4558 14.6064 29.5324C14.6061 30.3425 15.2626 30.9995 16.0728 30.9999H19.3071C20.1728 31.0071 20.9153 30.3839 21.0582 29.5301L21.6988 25.4988L21.7095 25.4442H22.0084C26.0406 25.4442 28.5591 23.451 29.2935 19.6815C29.7479 18.1032 29.4221 16.4029 28.4165 15.1043Z'
          fill='#FF4C51'
        />
      </svg>
    ),
  },
  {
    asset: (
      <svg
        width='40'
        height='41'
        viewBox='0 0 40 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 6.59997C0 3.28627 2.68629 0.599976 6 0.599976H34C37.3137 0.599976 40 3.28627 40 6.59998V34.6C40 37.9137 37.3137 40.6 34 40.6H6C2.68629 40.6 0 37.9137 0 34.6V6.59997Z'
          fill='#8C57FF'
          fill-opacity='0.16'
        />
        <path
          d='M10 13.9333C10 15.1606 10.9949 16.1556 12.2222 16.1556H12.2222H27.7778C29.0051 16.1556 30 17.1505 30 18.3778V27.2667C30 28.494 29.0051 29.4889 27.7778 29.4889H12.2222C10.9949 29.4889 10 28.494 10 27.2667V13.9333Z'
          fill='#E0CFFE'
        />
        <path
          d='M12.2222 16.1555H25.5555V13.7111C25.5555 12.6065 24.6602 11.7111 23.5555 11.7111H12C10.8954 11.7111 10 12.6065 10 13.7111V13.9333C10 15.1606 10.9949 16.1555 12.2222 16.1555Z'
          fill='#B992FE'
        />
        <path
          d='M30.0001 25.6001H27.1185C25.6578 25.6266 24.3795 24.6232 24.0582 23.198C23.7307 21.5711 24.784 19.9867 26.4109 19.6592C26.6049 19.6201 26.8022 19.6004 27.0001 19.6001H30.0001V25.6001Z'
          fill='#9155FD'
        />
      </svg>
    ),
  },
  {
    asset: (
      <svg
        width='40'
        height='41'
        viewBox='0 0 40 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 6.19995C0 2.88624 2.68629 0.199951 6 0.199951H34C37.3137 0.199951 40 2.88624 40 6.19995V34.2C40 37.5137 37.3137 40.2 34 40.2H6C2.68629 40.2 0 37.5137 0 34.2V6.19995Z'
          fill='#56CA00'
          fill-opacity='0.16'
        />
        <path d='M30 16.7H10V18.7H30V16.7Z' fill='#D0F0B8' />
        <path
          d='M27 12.7H13C11.3451 12.7048 10.0048 14.0451 10 15.7V16.7H30V15.7C29.9952 14.0451 28.6549 12.7048 27 12.7ZM10 24.7C10.0049 26.3548 11.3451 27.6951 13 27.7H27C28.6549 27.6951 29.9951 26.3548 30 24.7V18.7H10V24.7Z'
          fill='#A7E37A'
        />
        <path
          d='M18 22.7H15C14.4477 22.7 14 22.2522 14 21.7C14 21.1477 14.4477 20.7 15 20.7H18C18.5523 20.7 19 21.1477 19 21.7C19 22.2522 18.5523 22.7 18 22.7Z'
          fill='#56CA00'
        />
      </svg>
    ),
  },
]

const CustomVerticalRadioSVG = () => {
  const initialSelected: string = data.filter((item) => item.isSelected)[
    data.filter((item) => item.isSelected).length - 1
  ].value

  // States
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => {
        return (
          <CustomInputVertical
            type='radio'
            key={index}
            data={{ ...item, asset: SVGs[index].asset }}
            selected={selected}
            name='custom-radios-icons'
            handleChange={handleChange}
            gridProps={{ sm: 4, xs: 12 }}
          />
        )
      })}
    </Grid>
  )
}

export default CustomVerticalRadioSVG
