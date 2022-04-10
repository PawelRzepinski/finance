import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './Card'

export default {
  title: 'Molecules/Card',
  component: Card
} as ComponentMeta<typeof Card>

export const Primary: ComponentStory<typeof Card> = (args) => <Card {...args}>Card</Card>
