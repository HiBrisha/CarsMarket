import { Routes } from 'react-router-dom'
import { routesElement } from './routers'
import { Navigation } from '~components/Navigation'
import { Footer } from '~components/Footer'

export const App = () => {
  return (
    <>
      <Navigation isLoggedIn={false} />
      <Routes>{routesElement}</Routes>
      <Footer address='Thach Son 7 Hoa khanh, Lien Chieu, Da Nang city' phone='+84 389742037' email='Hieu.nguyenminh@biendongco.vn' file='Download Brochure' />
    </>
  )
}
