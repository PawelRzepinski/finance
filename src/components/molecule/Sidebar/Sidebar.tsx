import React from 'react'
import styled from 'styled-components'

export const Sidebar = () => (
  <SidebarWrapper>
    <div>logo</div>
    <div>navigation</div>
  </SidebarWrapper>
)

const SidebarWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary[10]};
  color: ${({ theme }) => theme.colors.white[80]};
`
