import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Atoms/Buttons/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = (arg) => <Button {...arg}>Primary</Button>
Primary.args = {
  onClick: () => console.log('Klik primary')
}

export const Secondary: ComponentStory<typeof Button> = (arg) => <Button {...arg}>Secondary</Button>
Secondary.args = {
  onClick: () => console.log('Klik secondary')
}
