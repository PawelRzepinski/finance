import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    }
  }
} as ComponentMeta<typeof Avatar>

export const Default: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
Default.args = {
  initials: 'AB'
}
