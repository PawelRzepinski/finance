import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ToggleButton } from './ToggleButton'

export default {
  title: 'Atoms/Button/ToggleButton',
  component: ToggleButton
} as ComponentMeta<typeof ToggleButton>

export const Default: ComponentStory<typeof ToggleButton> = (arg) => <ToggleButton {...arg} />
Default.args = {
  onClick: () => console.log('Toggle')
}
