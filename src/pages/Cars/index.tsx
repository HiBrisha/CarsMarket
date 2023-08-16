import React from 'react'
import { SelectElements } from '~components/Select'
import { useSelector } from 'react-redux'
import { typeReducer } from '~types/index'
import { Card } from './components/Card'
import bgheader from '~assets/images/bg-header.jpg'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { carsItem } from './components/Cars'

const itemsPerPage = 8

export const Cars = () => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage)
  }

  React.useEffect(() => {
    console.log(currentPage)
  }, [currentPage])

  const types = useSelector((state: typeReducer) => state.typesCar.types)
  return (
    <>
      <div className='w-full h-fit flex justify-center items-center'>
        <div className='w-fit h-screen grid grid-cols-6 grid-rows-1 overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-[400px] bg-center bg-cover z-[-1]' style={{ backgroundImage: `url(${bgheader})` }}></div>
          <div className='col-start-2 col-span-4 z-0 mt-24'>
            <header className='w-full h-[60px] p-2 bg-gray-200 grid grid-cols-3 grid-rows-1'>
              <div>
                <h1 className='justify-start text-4xl font-normal font-serif'>My Cars</h1>
              </div>
              <div className='flex items-center'>
                <Stack spacing={2}>
                  <Pagination count={10} shape='rounded' page={currentPage} onChange={handleChangePage} />
                </Stack>
              </div>
              <div className='flex justify-end z-10'>
                <SelectElements />
              </div>
            </header>
            <div className='w-full h-fit bg-gray-100 p-4 grid grid-cols-4 gap-2'>
              {carsItem.map((car, index) => (index >= itemsPerPage * currentPage - 8 && index < itemsPerPage * currentPage ? <Card car_image={car.images} /> : null))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
