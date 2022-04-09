import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MainHeader } from './MainHeader'

export default {
  title: 'Molecules/MainHeader',
  component: MainHeader
} as ComponentMeta<typeof MainHeader>

export const Primary: ComponentStory<typeof MainHeader> = () => <MainHeader />
