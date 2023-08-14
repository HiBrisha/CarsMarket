import React from 'react'
import { TextColor } from './types'

export const colorContext = React.createContext<TextColor>({
  color: 'text-black',
  setColor: () => {},
})
