import * as React from 'react'
import { FilterAlt } from '@mui/icons-material'
import car_icon from '~assets/images/car_icons.png'
import audi from '~assets/images/Audi.png'
import bmw from '~assets/images/BMW.png'
import ferrari from '~assets/images/ferrari.svg'
interface selectCars {
  types: string
  images: string
}

export const SelectElements: React.FC = () => {
  const [open, setOpen] = React.useState(true)
  const [slValue, setSlValue] = React.useState<selectCars>({
    types: 'Select your car',
    images: car_icon, // Gán giá trị của biến car_icon vào đây
  })

  const handleClick = (value: selectCars) => {
    setSlValue(value)
  }

  return (
    <div className='w-full h-fit px-4'>
      <div className='w-fit h-fit flex justify-start rounded-lg border-2 border-black p-2'>
        <img src={car_icon} className='object-scale-down h-auto w-16' alt='' srcSet='' />
        <input type='text' name='fill' id='' value={'Select your car'} className='w-[200px] ml-4' />
        <FilterAlt />
      </div>
    </div>
  )
}
