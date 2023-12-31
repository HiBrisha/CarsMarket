import { Link, useLocation } from 'react-router-dom'
import { isLoginReducer } from '~types/index'
import logo from '~assets/images/logo.png'
import { UserIcon } from './components/User'
import { useSelector } from 'react-redux'

export const Navigation = () => {
  const isLogin = useSelector((state: isLoginReducer) => state.isLogin.isLogin)
  const location = useLocation().pathname

  return (
    <header className='fixed top-0 w-full h-16 grid grid-cols-6 grid-rows-1 gap-4 border-b-2 border-gray bg-white z-[100]'>
      <div className='lg:col-span-1 flex justify-start items-center ml-4'>
        <img src={logo} className='object-cover h-12 w-12' alt='' srcSet='' />
        <h1 className='text-3xl font-semibold ml-4'>Hieu's Car</h1>
      </div>
      <div className='lg:col-span-4 flex justify-end items-center text-2xl font-normal'>
        <Link className={`w-24 h-full flex justify-center items-center mr-12 ${location === '/' ? 'border-b-2 border-blue-500' : null} `} to='/' role='button'>
          Home
        </Link>
        <Link className={`w-24 h-full flex justify-center items-center mr-12 ${location === '/cars' ? 'border-b-2 border-blue-500' : null}`} to='/cars' role='button'>
          Cars
        </Link>
        <Link className={`w-24 h-full flex justify-center items-center mr-12 ${location === '/bookings' ? 'border-b-2 border-blue-500' : null}`} to='/bookings' role='button'>
          Booking
        </Link>
      </div>
      <div className='col-span-1 flex justify-center items-center'>
        {isLogin ? (
          <UserIcon user='Hieuzkid' />
        ) : (
          <button type='button' className='rounded-lg bg-green-light text-4cl text-white font-semibold p-2 '>
            <Link to='/signin'>Sign In</Link>
          </button>
        )}

        {/**<button type='button' className='rounded-lg bg-green-light text-4cl text-white font-semibold p-2 '>
          <Link to='/signin'>Sign In</Link>
        </button> */}
      </div>
    </header>
  )
}
