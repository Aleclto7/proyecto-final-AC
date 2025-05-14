import {NavBar} from './components/NavBar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
      </Router>

      <footer>
        <div className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '50px'}}>
          <p className='m-0'>© 2025 Todo por 2 pesos</p>
        </div>
        <div className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '50px'}}>
          <p className='m-0'>Desarrollado por Alexis Calixto</p>
        </div>
        <div className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '50px'}}>
          <p className='m-0'>Contacto: alexiscfx1@gmail.com</p>
        </div>
        <div className='d-flex justify-content-center align-items-center bg-dark text-light' style={{height: '50px'}}>
          <p className='m-0'>Redes Sociales:  
            <a href='https:instagram.com'>Instagram </a> 
            - 
            <a href='https:twitter.com'> Twitter</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
