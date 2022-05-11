import React, { useState } from 'react'
import Nav from './Components/Nav'
import './Styles/Index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const [receita, setReceita] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
