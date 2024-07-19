import { useState } from 'react'
import Navbar from "./components/navbar"
import Registration from "./components/registration"



import './App.css'

function App() {
  

  return (
    <>
    <div>
      <Navbar/>
      </div>
    <div className='main'>
      <Registration  />
     
      
     
      
      </div>  
    </>
  )
}

export default App
