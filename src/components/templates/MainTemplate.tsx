import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import { Sidebar } from '../molecules/Sidebar/Sidebar'
import { MainHeader } from '../molecules/MainHeader/MainHeader'
import { SidebarContext } from '../../context'

interface MainTemplateProps {
  children: ReactNode
  isSidebarOpen?: boolean
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  const { isSidebarOpen } = useContext(SidebarContext)

  return (
    <MainTemplateWrapper isSidebarOpen={isSidebarOpen}>
      <Sidebar />
      <ContentWrapper>
        <MainHeader />
        {children}
      </ContentWrapper>
    </MainTemplateWrapper>
  )
}

const MainTemplateWrapper = styled.main<Pick<MainTemplateProps, 'isSidebarOpen'>>`
  display: grid;
  grid-template-columns: ${({ isSidebarOpen }) => isSidebarOpen ? '260px auto' : '70px auto'};
  width: 100vw;
  height: 100vh;
`

const ContentWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`
