import { iRouter } from './types'
import { Route } from 'react-router-dom'
import { Home } from '~pages/Home'
import { Users } from '~pages/Users'
import { Cars } from '~pages/Cars'
import { Bookings } from '~pages/Booking'

export const generateRouterElements = (routes: iRouter[]) => {
  return routes.map((route) => {
    return <Route key={route.path} path={route.path} element={route.element}></Route>
  })
}

export const routes: iRouter[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signin',
    element: <Users />,
  },
  {
    path: '/signup',
    element: <Users />,
  },
  {
    path: '/cars',
    element: <Cars />,
  },
  {
    path: '/bookings',
    element: <Bookings />,
  },
]

export const routesElement = generateRouterElements(routes)
