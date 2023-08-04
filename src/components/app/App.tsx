import {useEffect, useState} from 'react'
import Main from '../main/Main'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import Agreement from '../agreement/Agreement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "../../style/main/main.scss"
import "../../style/main/animation.scss"

const App = () => {


    return (
        <div className='app'>
            <Router>
                <Header />
                <div className='app__content'>
                    <Routes>
                        <Route path="/" element={
                            <Main />
                        } />
                        <Route path="/about" element={
                            <About />
                        } />
                        <Route path="/contacts" element={
                            <Contacts />
                        } />
                        <Route path="/agreement" element={
                            <Agreement />
                        } />
                    </Routes>
                </div>
                <Footer />
            </Router >
        </div >
    )
}

export default App