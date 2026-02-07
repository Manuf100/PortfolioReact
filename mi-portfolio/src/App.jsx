import HeaderComp from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectsList from './components/ProjectsList'
import ProjectDetail from './components/ProjectDetail'


function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <main className='bg-dark'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />}>
            <Route index element={<ProjectsList />} />
            <Route path=":id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
