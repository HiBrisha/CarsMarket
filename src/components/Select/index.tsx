import React from 'react'
import { FilterAlt } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { setTypes } from '~reducers/slices/TypeCars'
import { typeReducer, selectCars } from '~types/index'
import car_icon from '~assets/images/car_icons.png'
import audi from '~assets/images/Audi.png'
import bmw from '~assets/images/BMW.png'
import ferrari from '~assets/images/ferrari.svg'

export const SelectElements: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [slValue, setSlValue] = React.useState<selectCars>({
    types: 'Select your car',
    images: car_icon,
  })

  const selectedCarType = useSelector((state: typeReducer) => state.typesCar.types)
  const dispath = useDispatch()

  const handleClick = (value: selectCars) => {
    setOpen(!open)
    setSlValue(value)
  }

  React.useEffect(() => {
    dispath(setTypes(slValue.types))
  }, [slValue])

  return (
    <>
      <div className='w-fit h-screen px-4'>
        <div className='w-fit h-fit flex justify-start items-center rounded-lg border-1 border-black p-2'>
          <img src={slValue.images} className='object-contain w-8 h-6' alt='' srcSet='' />
          <span className='w-[200px] ml-4 cursor-default'>{selectedCarType}</span>
          <FilterAlt
            className='cursor-pointer'
            onClick={() => {
              setOpen(!open)
            }}
          />
        </div>
        <div className={`w-full h-fit overflow-visible border-1 border-black rounded-lg mt-1 bg-white ${open ? '' : 'hidden'}`}>
          <div
            className='w-full h-full flex items-center border-1 border-gray-300 rounded-t-lg p-2 cursor-pointer hover:bg-gray-100'
            onClick={() => {
              handleClick({ types: 'Audi', images: audi })
            }}
          >
            <div className='w-[40px] h-fit flex justify-center'>
              <img src={audi} alt='' srcSet='' />
            </div>
            <span className='ml-4'>Audi</span>
          </div>
          <div
            className='w-full h-full flex items-center border-1 border-gray-300 p-2 cursor-pointer hover:bg-gray-100'
            onClick={() => {
              handleClick({ types: 'BMW', images: bmw })
            }}
          >
            <div className='w-[40px] h-fit flex justify-center'>
              <img src={bmw} alt='' srcSet='' />
            </div>
            <span className='ml-4'>BMW</span>
          </div>
          <div
            className='w-full h-full flex items-center border-1 border-gray-300 rounded-b-lg p-2 cursor-pointer hover:bg-gray-100'
            onClick={() => {
              handleClick({ types: 'Ferrari', images: ferrari })
            }}
          >
            <div className='w-[40px] h-fit flex justify-center'>
              <img src={ferrari} alt='' srcSet='' className='object-fill w-6 h-auto' />
            </div>
            <span className='ml-4'>Ferrari</span>
          </div>
        </div>
      </div>
    </>
  )
}
