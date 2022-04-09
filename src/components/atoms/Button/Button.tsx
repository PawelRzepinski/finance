import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick: () => void
  size?: 'small' | 'medium' | 'large'
  view?: 'primary' | 'secondary' | 'square'
}

export const Button = ({ children, className, disabled, onClick, ...props }: ButtonProps) => {
  return (
      <ButtonWrapper className={className} disabled={disabled} onClick={onClick} {...props}>{children}</ButtonWrapper>
  )
}

const ButtonWrapper = styled.button<Pick<ButtonProps, 'view'>>`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  cursor: pointer;
  
  ${({ view }) => view === 'square' && css`
    width: 32px;
    height: 32px;
    background-color: orange;
  `}
`
