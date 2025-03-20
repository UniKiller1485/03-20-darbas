import { useState } from 'react'
import './App.css'
import Dropdown from './Components/Dropdown'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <Navbar/>
      <Hero />

      <h1 className='First'>HELLO</h1>

      <Dropdown title='TITLE' content='LABA RYTA' />
      <Dropdown title='Title' content='Labas rytas' />
    
      <div className="collapse bg-base-100 border-base-300 border">
  <input type="checkbox" />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">
  Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>

      <Footer />
    </>
  )
}

export default App
