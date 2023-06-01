import React, { ReactNode } from 'react'

interface IFormProps {
    children: ReactNode
}

const Form = ({children}: IFormProps) => {
  return (
    <form action="">
        {children}
    </form>
  )
}

export default Form