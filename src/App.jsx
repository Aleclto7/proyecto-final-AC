import {NavBar} from './components/NavBar'
import {AllProducts} from './pages/AllProducts'
import {Electronics} from './pages/Electronics'
import {Kids} from './pages/Kids'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewFooter } from './components/Footer'
import { ShoppingCart } from './pages/ShoppingCart'
import { Login } from './pages/Login'
import {ProtectedRoutes} from './functions/ProtectedRoutes'
import { Admin } from './pages/Admin'
import { Favorites } from './pages/Favorites'


function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar/>
            <Routes>
              <Route path='/' element={<AllProducts/>}/>
              <Route path='/electronics' element={<Electronics/>}/>
              <Route path='/kids' element={<Kids/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/shoppingCart' element={<ShoppingCart/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/admin' element={
                <ProtectedRoutes>
                  <Admin/>
                </ProtectedRoutes>
                }/>
              {/* <Route path='/admin' element={<Admin/>}/> */}
            </Routes>
        </div>
      </Router>

      <footer>
        <NewFooter 
          github={'https://github.com/Aleclto7'}
          instagram={'https://www.instagram.com/aleclto7/'}
          linkedin={'https://www.linkedin.com/in/alexis-calixto-9a608a233/?originalSubdomain=ec'}
        />
      </footer>
    </>
  )
}

export default App
