import React from 'react'
import Navigation from './components/Navigation'
import { Route, Routes } from 'react-router'
import About from './routers/About'
import Skills from './routers/Skills'
import Contact from './routers/Contact'
import Home from './routers/Home'

function App() {
  return (
    <>
      <div className='h-full w-full bg-[#101010]'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App