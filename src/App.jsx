import React from 'react'
import { Home } from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import { Aside } from './components/Aside'
import { PasoUno } from './components/PasoUno'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path={"/1"}element={<PasoUno />} />
       <Route path={"/2"}element={<Aside />} />
       <Route path={"/3"}element={<Home />} />
       <Route path={"/4"}element={<Home />} />
       <Route path={"/5"}element={<Home />} />
       <Route path={"/6"}element={<Home />} />
       <Route path={"/7"}element={<Home />} />
       <Route path={"/8"}element={<Home />} />
       <Route path={"/9"}element={<Home />} />
       <Route path={"/10"}element={<Home />} />
       <Route path={"/11"}element={<Home />} />
       <Route path={"/12"}element={<Home />} />
    </Routes>
  )
}
