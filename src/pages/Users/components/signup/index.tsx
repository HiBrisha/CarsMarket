import React from 'react'
import { Link } from 'react-router-dom'
import { InputElements } from '../inputs'
import { Person, Lock, Email, Phone } from '@mui/icons-material'
export const SignUpElement = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = () => {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) // Parse the JSON response
      .catch((error: Error) => {
        console.log('Request failed', error)
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
    })
  }

  return (
    <>
      <div>
        <InputElements placeholder={'User Name or Email Address'} inputKey='username' icon={Person} type='text' callback={(event) => handleChange(event, 'name')} />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Email address'} inputKey={'email'} icon={Email} type='text' callback={(event) => handleChange(event, 'email')} />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Your phone'} inputKey={'phone'} icon={Phone} type='text' callback={(event) => handleChange(event, 'phone')} />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Password'} inputKey={'password'} icon={Lock} type='password' callback={(event) => handleChange(event, 'password')} />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Password confirm'} inputKey={'confirmPassword'} icon={Lock} type='password' callback={(event) => handleChange(event, 'confirmPassword')} />
      </div>
      <button className='h-fit w-full flex text-white text-2xl justify-center items-center bg-red-900 mt-4' onClick={handleSubmit}>
        SignUp
      </button>
      <span className='flex justify-center text-white mt-2'>
        You have an account?{' '}
        <Link to='/signin' className='text-red-500 ml-2'>
          Sign In
        </Link>
      </span>
    </>
  )
}
