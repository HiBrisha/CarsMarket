import { Link } from 'react-router-dom'
import { InputElements } from '../inputs'
import { Person, Lock, Email, Phone } from '@mui/icons-material'
export const SignUpElement = () => {
  return (
    <>
      <div>
        <InputElements placeholder={'User Name or Email Address'} key={'username'} icon={Person} type='text' />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Email address'} key={'email'} icon={Email} type='text' />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Your phone'} key={'phone'} icon={Phone} type='text' />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Password'} key={'password'} icon={Lock} type='password' />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Password confirm'} key={'confirm-password'} icon={Lock} type='password' />
      </div>
      <button className='h-fit w-full flex text-white text-2xl justify-center items-center bg-red-900 mt-4' type='submit'>
        Login
      </button>
      <span className='flex justify-center text-white'>
        Don't have an account?{' '}
        <Link to='/signin' className='text-red-500 ml-2'>
          Sign In
        </Link>
      </span>
    </>
  )
}
