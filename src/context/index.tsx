import React, { createContext } from 'react'

interface SidebarContextProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<boolean>
}

export const SidebarContextDefault: SidebarContextProps = {
  isSidebarOpen: true,
  setIsSidebarOpen: () => null
}
export const SidebarContext = createContext<SidebarContextProps>(SidebarContextDefault)
