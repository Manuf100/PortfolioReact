import HeaderComp from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/proyectos" element={<Projects />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
