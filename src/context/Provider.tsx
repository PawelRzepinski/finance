import React, { ReactNode, useState } from 'react'
import { SidebarContext } from '.'
import { theme } from '../style/theme'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

export const Provider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </SidebarContext.Provider>
  )
}
