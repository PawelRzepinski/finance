import React from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'
import styled from 'styled-components'
import { ComponentSize } from '../../../types'

interface AvatarProps {
  image?: string
  initials: string
  size?: ComponentSize
}

export const Avatar = ({ image, initials, size }: AvatarProps) => (
  <AvatarWrapper>
    <AvatarImage src={image} size={size} />
    <RadixAvatar.Fallback>{initials}</RadixAvatar.Fallback>
  </AvatarWrapper>
)

const getAvatarSize = (size) => {
  switch (size) {
    case 'small':
      return '32px'
    case 'large':
      return '56px'
    case 'medium':
    default:
      return '48px'
  }
}

const AvatarWrapper = styled(RadixAvatar.Root)<Pick<AvatarProps, 'size' | 'image'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme, image }) => image ? theme.colors.transparent : theme.colors.primary[50]};
`

const AvatarImage = styled(RadixAvatar.Image)<Pick<AvatarProps, 'size'>>`
  width: ${({ size }) => getAvatarSize(size)};
  height: ${({ size }) => getAvatarSize(size)};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  object-fit: cover;
`
