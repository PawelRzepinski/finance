import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../../atoms/Avatar/Avatar'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImg from '../../../assets/avatarImg.jpg'

export const MainHeader = () => (
  <MainHeaderWrapper>
    <span>search</span>
    <Avatar initials='PR' image={AvatarImg} />
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
