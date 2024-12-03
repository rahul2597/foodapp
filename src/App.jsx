import { useState } from 'react'
import './App.css'
import Mainpage from './components/Mainpage'
import { Routes, Route } from 'react-router-dom'
import Mealinfo from './components/Mealinfo'
function App() {


  return (
    <>

      <div className='app-container'>
        <h1>Food Recipe App</h1>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/:mealid' element={<Mealinfo />} />
        </Routes>
      </div>

    </>
  )
}

export default App
