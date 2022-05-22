import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AddTuto from './components/AddTuto'
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<AddTuto />}></Route>
      </Routes>
    </Router>
  )
}

export default App
