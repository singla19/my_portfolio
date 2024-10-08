import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'

const App = () => {
  return (
    <div>
        <Nav />
        <Header />
        <About />
        <Contacts />
    </div>
  )
}

export default App
