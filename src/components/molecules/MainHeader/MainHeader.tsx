import React from 'react'
import styled from 'styled-components'

export const MainHeader = () => (
  <MainHeaderWrapper>
    <span>search</span>
    <span>user account</span>
  </MainHeaderWrapper>
)

const MainHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.white[100]};
  padding: 0 32px;
`
