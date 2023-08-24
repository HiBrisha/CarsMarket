import { Routes, useLocation } from 'react-router-dom'
import { routesElement } from './routers'
import { Navigation } from '~components/Navigation'
import { Footer } from '~components/Footer'
import store from '~reducers/store'
import { Provider } from 'react-redux'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>{routesElement}</Routes>
        {useLocation().pathname !== '/cars' ? (
          <Footer address='Thach Son 7 Hoa khanh, Lien Chieu, Da Nang city' phone='+84 389742037' email='Hieu.nguyenminh@biendongco.vn' file='Download Brochure' />
        ) : null}
      </Provider>
    </>
  )
}
