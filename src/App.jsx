import {NavBar} from './components/NavBar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
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
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
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
