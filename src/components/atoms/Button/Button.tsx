import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  className?: string
  disabled?: boolean
  onClick: () => void
}

export const Button = ({ className, disabled, onClick }: ButtonProps) => (
  <button className={className} disabled={disabled} onClick={onClick}>click</button>
)

export const Toggler = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: red;
`
