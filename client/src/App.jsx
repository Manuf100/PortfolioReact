import HeaderComp from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectsList from './components/ProjectsList'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin'
import ProjectEditAdmin from './components/ProjectEditAdmin'

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
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }></Route>
          <Route path="/admin/editar-proyecto/:id" element={
            <ProtectedRoute>
              <ProjectEditAdmin />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
