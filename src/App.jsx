import {NavBar} from './components/NavBar'
import {AllProducts} from './pages/AllProducts'
import {Electronics} from './pages/Electronics'
import {Jewelery} from './pages/Jewelery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewFooter } from './components/Footer'
import { useState, useEffect } from 'react'


function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar/>
            <Routes>
              <Route path='/' element={<AllProducts/>}/>
              <Route path='/electronics' element={<Electronics/>}/>
              <Route path='/jewelery' element={<Jewelery/>}/>
              {/* <Route path='/admin' element={<Admin/>}/> */}
            </Routes>
        </div>
      </Router>

      <footer>
        <NewFooter 
        instagram={'https:instagram.com'}
        twitter={'https:twitter.com'}
        />
      </footer>
    </>
  )
}

export default App
