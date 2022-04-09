import React from 'react'
import { Button } from '../Button/Button'

interface ToggleButtonProps {
  onClick: () => void
}

export const ToggleButton = ({ onClick }: ToggleButtonProps) => (
  <Button onClick={onClick}>X</Button>
)
