import React from 'react'
import Main from '../main/Main'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import Agreement from '../agreement/Agreement'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'

const App = () => {
  return (
    <div className='app'>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <Main />
          } />
          <Route path="/about" element={
            <About />
          } />
          <Route path="/contacs" element={
            <Contacts />
          } />
          <Route path="/agreement" element={
            <Agreement />
          } />
        </Routes>
      </Router >
    </div >
  )
}

export default App