import React from 'react'
import { Home } from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import { PasoUno } from './components/PasoUno'
import { PasoDos } from './components/PasoDos'
import { PasoTres } from './components/PasoTres'
import { PasoCuatro } from './components/PasoCuatro'
import { PasoCinco } from './components/PasoCinco'
import { PasoSeis } from './components/PasoSeis'
import { PasoSiete } from './components/PasoSiete'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path={"/1"} element={<PasoUno />} />
      <Route path={"/2"} element={<PasoDos />} />
      <Route path={"/3"} element={<PasoTres />} />
      <Route path={"/4"} element={<PasoCuatro />} />
      <Route path={"/5"} element={<PasoCinco />} />
      <Route path={"/6"} element={<PasoSeis />} />
      <Route path={"/7"} element={<PasoSiete />} />
      <Route path={"/8"} element={<Home />} />
      <Route path={"/9"} element={<Home />} />
      <Route path={"/10"} element={<Home />} />
      <Route path={"/11"} element={<Home />} />
      <Route path={"/12"} element={<Home />} />
    </Routes>
  )
}
