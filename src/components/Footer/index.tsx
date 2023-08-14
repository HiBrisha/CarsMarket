import { footerProps } from './types'
import { Link, useLocation } from 'react-router-dom'
import { FmdGood as FmdGoodIcon, PermPhoneMsg as PhoneIcon, Email as Email, PictureAsPdf, Facebook, Twitter, ConnectWithoutContact, LinkedIn, Pinterest } from '@mui/icons-material'

export const Footer: React.FC<footerProps> = ({ address, phone, email, file }) => {
  return (
    <footer
      className={`${
        ['/', '/signin', '/signup'].includes(useLocation().pathname) ? 'fixed bottom-0' : ''
      }  w-full h-fit grid grid-cols-4 grid-rows-7 gap-8 p-4 bg-dark-light text-white`}
    >
      <div>
        <h5 className='text-2xl font-semibold mb-4'>About Rentaly</h5>
        <p>
          Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously
          crafted our offerings to provide you with top-notch vehicles at minimum expense.
        </p>
      </div>
      <div>
        <h5 className='text-2xl font-semibold mb-4'>Contact Info</h5>
        <div className='w-full flex flex-col justify-between'>
          <div>
            <span>
              <FmdGoodIcon style={{ fontSize: '30px', color: '#78CA5C' }} /> {address}
            </span>
          </div>
          <div>
            <span>
              <PhoneIcon style={{ fontSize: '30px', color: '#78CA5C' }} /> {phone}
            </span>
          </div>
          <div>
            <span>
              <Email style={{ fontSize: '30px', color: '#78CA5C' }} /> {email}
            </span>
          </div>
          <div>
            <span>
              <PictureAsPdf style={{ fontSize: '30px', color: '#78CA5C' }} /> {file}
            </span>
          </div>
        </div>
      </div>
      <div className=''>
        <h5 className='text-2xl font-semibold mb-4'>Quick Links</h5>
        <div className='flex flex-col justify-center'>
          <div>
            <Link to='/about'>About</Link>
          </div>
          <div>
            <Link to='/blog'>Blog</Link>
          </div>
          <div>
            <Link to='/careers'>Careers</Link>
          </div>
          <div>
            <Link to='/news'>News</Link>
          </div>
          <div>
            <Link to='/partners'>Partners</Link>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 footer_item'>
        <h5 className='text-2xl font-semibold mb-4'>Social Networks</h5>
        <div className='flex flex-row'>
          <Link to={''} className='mr-4 rounded-full bg-white p-2'>
            <Facebook style={{ fontSize: '30px', color: '#78CA5C' }} />
          </Link>
          <Link to={''} className='mr-4 rounded-full bg-white p-2'>
            <Twitter style={{ fontSize: '30px', color: '#78CA5C' }} />
          </Link>
          <Link to={''} className='mr-4 rounded-full bg-white p-2'>
            <LinkedIn style={{ fontSize: '30px', color: '#78CA5C' }} />
          </Link>
          <Link to={''} className='mr-4 rounded-full bg-white p-2'>
            <Pinterest style={{ fontSize: '30px', color: '#78CA5C' }} />
          </Link>
          <Link to={''} className='mr-4 rounded-full bg-white p-2'>
            <ConnectWithoutContact style={{ fontSize: '30px', color: '#78CA5C' }} />
          </Link>
        </div>
      </div>
      <div className='w-full h-fit col-span-5 grid grid-cols-2 grid-rows-1 gap-4 font-semibold border-t-2 border-white'>
        <div className='flex justify-center items-center mt-4'>Copyright 2023 - Rentaly by HieuNguyen</div>
        <div className='flex justify-center items-center mt-4'>Terms & Conditions Privacy Policy</div>
      </div>
    </footer>
  )
}
