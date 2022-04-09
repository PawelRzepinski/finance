import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from './context/Provider'
import { GlobalStyle } from './style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
