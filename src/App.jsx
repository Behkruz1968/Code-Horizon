import React from 'react'
import Header from './Wibsayt/Header'
import Header2 from './Wibsayt/Header2'
import Code from './Wibsayt/Code'
import Curs from './Wibsayt/Curs'
import Skil from './Wibsayt/Skil'
import TIme from './Wibsayt/TIme'
import Instructor from './Wibsayt/Instructor'
import Footer from './Wibsayt/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Course from './Wibsayt/Course'

const App = () => {
  return (
    <div>

     <Routes>
      <Route path='/' element={
        <>
        <Header />
      <Header2 />
      <Code />
      <Curs />
      <Skil />
      <TIme />
      <Instructor />
   

      <Footer />
        </>
      } />
      <Route path='/Curs' element={<Course />} />
     </Routes>
      
      
    </div>
  )
}

export default App
