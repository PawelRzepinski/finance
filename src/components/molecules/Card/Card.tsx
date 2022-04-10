import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface CardProps {
  children: ReactNode
  header?: ReactNode
}

export const Card = ({ children, header }: CardProps) => (
  <CardWrapper>
    {header && (
      <HeaderWrapper>
        {header}
      </HeaderWrapper>
    )}
    {children}
  </CardWrapper>
)

const CardWrapper = styled.div`
  padding: 24px;
  border: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.colors.white[100]};
  box-shadow: 0 0 35px 0 rgba(154,161,171,0.15);
  margin-bottom: 10px;
`

const HeaderWrapper = styled.header`
  margin-bottom: 12px;
`
