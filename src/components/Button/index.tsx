import React, { ReactNode } from 'react'

interface iButtonProps {
    children: ReactNode,
    typeBtn?: "button" | "submit" 
}

const Button = ({children, typeBtn = "button"}: iButtonProps) => {
  return (
    <button type={typeBtn}>{children}</button>
  )
}

export default Button