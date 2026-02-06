import HeaderComp from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <main className='bg-dark'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/proyectos" element={<Projects />} />*/}
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
