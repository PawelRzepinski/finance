import React, { useContext } from 'react'
import styled from 'styled-components'
import { Logo } from '../../atoms/Logo/Logo'
import { Button } from '../../atoms/Button/Button'
import { SidebarContext } from '../../../context'

export const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)

  return (
    <SidebarWrapper>
      <ToggleButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} view='square'>
        x
      </ToggleButton>
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

const ToggleButton = styled(Button)`
  position: absolute;
  top: 35px;
  right: 0;
  transform: translate(50%, -50%);
`
