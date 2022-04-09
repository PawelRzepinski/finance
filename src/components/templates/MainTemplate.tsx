import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Sidebar } from '../molecules/Sidebar/Sidebar'
import { MainHeader } from '../molecules/MainHeader/MainHeader'

interface MainTemplateProps {
  children: ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => (
  <MainTemplateWrapper>
    <Sidebar />
    <ContentWrapper>
      <MainHeader />
      {children}
    </ContentWrapper>
  </MainTemplateWrapper>
)

const MainTemplateWrapper = styled.main`
  display: grid;
  grid-template-columns: 260px auto;
  width: 100vw;
  height: 100vh;
`

const ContentWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`
