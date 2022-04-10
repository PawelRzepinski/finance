import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    },
    view: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'square']
      },
      defaultValue: 'primary'
    }
  }
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = (arg) => <Button {...arg}>Primary</Button>
Primary.args = {
  onClick: () => console.log('Klik primary')
}

export const Secondary: ComponentStory<typeof Button> = (arg) => <Button {...arg}>Secondary</Button>
Secondary.args = {
  onClick: () => console.log('Klik secondary')
}
