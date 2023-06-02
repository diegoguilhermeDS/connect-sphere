import React from 'react'

interface IInputErrorProps {
    message: string
}

const InputError = ({message}: IInputErrorProps) => {
  return (
    <span>{message}</span>
  )
}

export default InputError