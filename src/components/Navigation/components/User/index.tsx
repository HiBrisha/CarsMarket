import React from 'react'
import { AccountCircle, ArrowDropDown, Info, Inventory, ShoppingCart, ExitToApp } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setIsLogin } from '~reducers/slices/isLogin'

interface userProps {
  user: string
}

export const UserIcon: React.FC<userProps> = ({ user }) => {
  const [show, setShow] = React.useState(false)
  const dispath = useDispatch()

  const handleShowChange = () => {
    setShow(!show)
  }

  const handleLogOut = () => {
    dispath(setIsLogin(false))
  }
  return (
    <>
      <div className='relative w-full h-fit flex flex-col mx-2'>
        <div className='w-fit h-full flex items-center text-2xl ml-[10px]'>
          <AccountCircle style={{ fontSize: '36px', marginRight: '10px' }} />
          {user}
          <ArrowDropDown style={{ fontSize: '32px', cursor: 'pointer' }} onClick={handleShowChange} />
        </div>
        <div className={`absolute w-full h-[fit] flex flex-col translate-y-[50px] border-1 border-gray-300 rounded-lg bg-white ${show ? '' : 'hidden'}`}>
          <div className='w-full h-fit flex items-center text-s1-xl font-normal font-serif border-b-2 border-gray-200 p-2 cursor-pointer'>
            <Info style={{ fontSize: '32px', marginRight: '10px' }} />
            <span>My Profile</span>
          </div>
          <div className='w-full h-fit flex items-center text-s1-xl mt-2 font-normal font-serif border-b-2 border-gray-200 p-2 cursor-pointer'>
            <Inventory style={{ fontSize: '32px', marginRight: '10px' }} />
            <span>My Orders</span>
          </div>
          <div className='w-full h-fit flex items-center text-s1-xl mt-2 font-normal font-serif border-b-2 border-gray-200 p-2 cursor-pointer'>
            <ShoppingCart style={{ fontSize: '32px', marginRight: '10px' }} />
            <span>Carts</span>
          </div>
          <div className='w-full h-fit flex items-center text-s1-xl mt-2 font-normal font-serif border-b-2 border-gray-200 p-2 cursor-pointer' onClick={handleLogOut}>
            <ExitToApp style={{ fontSize: '32px', marginRight: '10px' }} />
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </>
  )
}
