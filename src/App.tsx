import { useState } from 'react'
import Login from './pages/login/Login'

import dark from './styles/themes/dark'


import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Base } from './styles/global'

export function App() {
  // const theme = useState<DefaultTheme>
 
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <Base />
          <Login />
      </div>
    </ThemeProvider>
  )
}


