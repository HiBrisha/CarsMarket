import React from 'react'
import { Link } from 'react-router-dom'
import { SelectElements } from '~components/Select'
import { Card } from './components/Card'
import bgheader from '~assets/images/bg-header.jpg'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { carsItem } from './components/Cars'
import { Footer } from '~components/Footer'

const itemsPerPage = 8

export const Cars = () => {
  const [currentPage, setCurrentPage] = React.useState(1)

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage)
  }

  React.useEffect(() => {
    console.log(currentPage)
  }, [currentPage])

  return (
    <>
      <div className='w-full h-fit flex justify-center items-center'>
        <Link
          to='/sells'
          role='button'
          className='w-[60px] h-[60px] fixed flex items-center justify-center right-10 bottom-10 text-6xl text-green-700 border-2 border-green-700 rounded-full pb-3 z--1] cursor-pointer'
        >
          +
        </Link>
        <div className='w-[1240px] h-[895px] bg-gray-100'>
          <div className='absolute top-0 left-0 w-full h-[400px] bg-center bg-cover z-[-1]' style={{ backgroundImage: `url(${bgheader})` }}></div>
          <div className='w-full h-full z-0 mt-16'>
            <header className='fixed w-[1240px] h-[60px] p-2 bg-gray-200 grid grid-cols-3 grid-rows-1 z-[20]'>
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
            <div className='relative w-full h-fit p-4 grid grid-cols-4 grid-rows-2 gap-2 translate-y-16 z-[10]'>
              {carsItem.map((car, index) => (index >= itemsPerPage * currentPage - 8 && index < itemsPerPage * currentPage ? <Card car_image={car.images} /> : null))}
            </div>
          </div>
        </div>
      </div>
      <Footer address='Thach Son 7 Hoa khanh, Lien Chieu, Da Nang city' phone='+84 389742037' email='Hieu.nguyenminh@biendongco.vn' file='Download Brochure' />
    </>
  )
}
