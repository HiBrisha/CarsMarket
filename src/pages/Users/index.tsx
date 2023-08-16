import bgSingIn from '~assets/images/bgsignin.jpg'
import { useLocation } from 'react-router-dom'
import { SignInElement } from './components/signin'
import { SignUpElement } from './components/signup'

export const Users = () => {
  return (
    <>
      <div className='w-full h-[calc(100vh-331px)] items-center translate-y-16 flex justify-center bg-cover' style={{ backgroundImage: `url(${bgSingIn})` }}>
        <div className='w-1/4 h-fit p-[2px] translate-y-2 overflow-hidden rounded-form z-10'>
          <form action='' className='form-container w-full h-form rounded-form bg-dark-light overflow-hidden p-12'>
            {useLocation().pathname != '/signup' ? <SignInElement /> : <SignUpElement />}
          </form>
        </div>
      </div>
    </>
  )
}
