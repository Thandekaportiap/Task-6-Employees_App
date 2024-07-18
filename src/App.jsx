import { useState } from 'react'
import Navbar from "./components/navbar"
import Registration from "./components/registration"
import List from "./components/list"
import Profile from "./components/profile"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      </div>
    <div className='main'>
      <Registration/>
     
      <List/>
     
      <Profile/>
      </div>  
    </>
  )
}

export default App
