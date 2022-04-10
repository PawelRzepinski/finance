import React, { forwardRef, ReactNode, useRef } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick: () => void
  size?: 'small' | 'medium' | 'large'
  view?: 'primary' | 'secondary' | 'square'
  wide?: boolean
}

// eslint-disable-next-line no-undef,react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, onClick, wide, ...props }) => {
    // eslint-disable-next-line no-undef
    const refContainer = useRef<HTMLButtonElement>(null)
    return (
      <ButtonWrapper className={className} disabled={disabled} onClick={onClick} wide={wide} ref={refContainer} {...props}>{children}</ButtonWrapper>
    )
  }
)
const ButtonWrapper = styled.button<Pick<ButtonProps, 'view' | 'size'>>`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, view }) => view === 'primary' ? theme.colors.primary[50] : theme.colors.white[100]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  cursor: pointer;
  
  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '32px'
      case 'large':
        return '50px'
      case 'medium':
      default:
        return '40px'
    }
  }};

  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0 16px'
      case 'large':
        return '0 20px'
      case 'medium':
      default:
        return '0 24px'
    }
  }};
  
  ${({ view }) => view === 'square' && css`
    width: 32px;
    height: 32px;
    background-color: orange;
  `}
`
