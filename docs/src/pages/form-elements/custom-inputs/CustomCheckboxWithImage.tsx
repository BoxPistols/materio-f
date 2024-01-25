// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Import
import { CustomInputImgData } from '@docComponents/custom-inputs/types'

// Components Imports
import CustomInputImg from '@docComponents/custom-inputs/Image'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import avatar22 from '../../../../docs/assets/images/banners/22.jpg'
import avatar26 from '../../../../docs/assets/images/banners/26.jpg'
import avatar27 from '../../../../docs/assets/images/banners/27.jpg'

const data: CustomInputImgData[] = [
  {
    value: 'clock',
    isSelected: true,
    img: avatar27
  },
  {
    value: 'donuts',
    img: avatar26
  },
  {
    value: 'flowers',
    img: avatar22
  }
]

const CustomCheckboxWithImage = () => {
  const initialSelected: string[] = data.filter(item => item.isSelected).map(item => item.value)

  // States
  const [selected, setSelected] = useState<string[]>(initialSelected)

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <Grid container spacing={4}>
      {data.map((item, index) => (
        <CustomInputImg
          type='checkbox'
          key={index}
          data={item}
          selected={selected}
          name='custom-checkbox-img'
          handleChange={handleChange}
          gridProps={{ sm: 4, xs: 12 }}
        />
      ))}
    </Grid>
  )
}

export default CustomCheckboxWithImage
