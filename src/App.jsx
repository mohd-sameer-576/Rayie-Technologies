import ProjectsPage from './pages/ProjectsPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/Services' element={<ServicesPage/>}/>
    </Routes>
    </>
  )
}

export default App
