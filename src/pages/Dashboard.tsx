import { MainTemplate } from '../components/templates/MainTemplate'
import React from 'react'
import { Card } from '../components/molecules/Card/Card'

export const Dashboard = () => (
    <MainTemplate>
      <Card>
        <p>it is firs children</p>
      </Card>
      <Card>
        It is card component
      </Card>
    </MainTemplate>
)
