import React, { ReactNode } from 'react'

interface iButtonProps {
    children: ReactNode,
}

const Button = ({children}: iButtonProps) => {
  return (
    <button>{children}</button>
  )
}

export default Button