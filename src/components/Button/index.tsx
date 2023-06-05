import React, { ReactNode } from 'react'

interface iButtonProps {
    children: ReactNode,
    typeBtn?: "button" | "submit"
    handle?: () => void
}

const Button = ({children, typeBtn = "button", handle}: iButtonProps) => {
  return (
    <button onClick={handle} type={typeBtn}>{children}</button>
  )
}

export default Button