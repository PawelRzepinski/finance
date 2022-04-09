import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/Logo/Logo'

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ToggleBtn onClick={() => console.log('func')}>x</ToggleBtn>
      <Logo/>
      <div>navigation</div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary[10]};
  color: ${({ theme }) => theme.colors.white[80]};
`

const ToggleBtn = styled.button`
  position: absolute;
  top: 35px;
  right: 0;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: pink;
`
