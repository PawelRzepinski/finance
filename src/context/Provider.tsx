import React, { ReactNode } from 'react'
import { SidebarProvider } from '.'
import { theme } from '../style/theme'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}
export const Provider = ({ children }: Props) => (
  <SidebarProvider.Provider value={{ text: 'Example text' }}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </SidebarProvider.Provider>
)
