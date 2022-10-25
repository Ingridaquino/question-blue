import { useState } from 'react'
import Login from './pages/login/Login'

import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'

export function App() {


  return (
    <div className="App">
       <GlobalStyle />
        <Login />
    </div>
  )
}


