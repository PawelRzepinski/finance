import { MainTemplate } from '../components/templates/MainTemplate'
import React, { useContext } from 'react'
import { SidebarProvider } from '../context'

export const Dashboard = () => {
  const context = useContext(SidebarProvider)

  console.log(context)
  return (
    <MainTemplate>
      <p>it is firs children</p>
    </MainTemplate>
  )
}
