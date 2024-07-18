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
    <Navbar/>

    <Registration/>
    <List/>
    <Profile/>  
    </>
  )
}

export default App
