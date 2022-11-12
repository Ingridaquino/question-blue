import { useState } from 'react'
import Login from './pages/login/Login'

import dark from './styles/themes/dark'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Base } from './styles/global'
import Cadastro from './pages/cadastro/Cadastro';

export function App() {
  // const theme = useState<DefaultTheme>
 
  return (
    <Router>
      <ThemeProvider theme={dark}>
        <Base />
          {/* <NavBar />  */}

        <div className="App">
          <Routes>
            <Route path="/" element={<Login />}/>

            <Route
              path="*"
              element={
                <main className="no-found">
                  <p>There's nothing here!</p>
                </main>
              }
            />

            <Route path="/cadastro" element={<Cadastro />}/>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  )
}


