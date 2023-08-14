import { iRouter } from './types'
import { Route } from 'react-router-dom'
import { Home } from '~pages/Home'
import { Users } from '~pages/Users'
import { Cars } from '~pages/Cars'

export const generateRouterElements = (routes: iRouter[]) => {
  return routes.map((route) => {
    return <Route path={route.path} element={route.element}></Route>
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
]

export const routesElement = generateRouterElements(routes)
