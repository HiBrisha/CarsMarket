import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { InputElements } from '../inputs'
import { Facebook, Twitter, LinkedIn, Person, Lock } from '@mui/icons-material'
import { setIsLogin } from '~reducers/slices/isLogin'
import { useDispatch } from 'react-redux'

export const SignInElement = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          dispath(setIsLogin(true))
          navigate('/')
        } else {
          alert('Login Fail')
        }
      })
      .catch((error) => {
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
        <InputElements
          placeholder={'User Name or Email Address'}
          inputKey={'username'}
          icon={Person}
          type='text'
          callback={(event) => handleChange(event, `${event.target.value.includes('@') ? 'email' : 'name'}`)}
        />
      </div>
      <div className='mt-4'>
        <InputElements placeholder={'Password'} inputKey={'password'} icon={Lock} type='password' callback={(event) => handleChange(event, 'password')} />
      </div>
      <div className='w-full h-fit grid grid-cols-2 grid-rows-1 py-2'>
        <div className='flex flex-rows text-white'>
          <input type='checkbox' />
          <span> Remember me</span>
        </div>
        <div className='flex text-red-500 justify-end'>
          <span>Forgot password?</span>
        </div>
      </div>
      <button className='h-fit w-full flex text-white text-2xl justify-center items-center bg-red-900 pb-2' type='submit' onClick={handleSubmit}>
        Login
      </button>
      <div className='w-full h-fit flex items-center mt-2 text-white'>
        <hr className='w-1/4 bg-white mr-2' />
        <div className='w-2/4 flex justify-center h-fit'>Or login with</div>
        <hr className='w-1/4 bg-white ml-2' />
      </div>
      <div className='w-full h-fit flex flex-row justify-center p-4'>
        <Link to={'https://www.facebook.com/profile.php?id=100028911644782'} className='rounded-full bg-white p-2 mr-2'>
          <Facebook style={{ fontSize: '30px', color: '#78CA5C' }} />
        </Link>
        <Link to={''} className='rounded-full bg-white p-2 mr-2'>
          <Twitter style={{ fontSize: '30px', color: '#78CA5C' }} />
        </Link>
        <Link to={''} className='rounded-full bg-white p-2'>
          <LinkedIn style={{ fontSize: '30px', color: '#78CA5C' }} />
        </Link>
      </div>
      <span className='flex justify-center text-white'>
        Don't have an account?{' '}
        <Link to='/signup' className='text-red-500 ml-2'>
          Sign up
        </Link>
      </span>
    </>
  )
}
