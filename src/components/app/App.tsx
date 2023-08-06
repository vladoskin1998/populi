import { useEffect, useRef, useState } from 'react'
import Main from '../main/Main'
import About from '../about/About'
import Contacts from '../contacts/Contacts'
import Agreement from '../agreement/Agreement'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "../../style/main/main.scss"
import "../../style/main/animation.scss"
import "../../style/main-tp/main-tp.scss"
import MainTP from '../main-tablet-phone/MainTP'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const App = () => {

    const [isAnimation, setAnimation] = useState(true)
    const appRef = useRef<any>(null)


    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isTablet = /Tablet|iPad/i.test(userAgent);

        setIsDesktop(!isMobile && !isTablet);
    }, []);

    useEffect(() => {

        appRef.current = document.querySelector('.app')
        console.log(appRef);


        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        const currentPath = window.location.pathname;
        if (currentPath !== '/' && currentPath !== '/home') {
            window.location.href = '/';
        }

        setTimeout(() => {
            appRef!.current!.style!.background = 'transparent'
        }, 3500)

        setTimeout(() => {
            document.body.style.overflowY = 'scroll';

            setAnimation(false)
        }, 6000);
    }, []);


    return (
        <div className='app'>
            <I18nextProvider i18n={i18n}>
                <Router>
                    <Header />
                    <div className='app__content'>
                        <Routes>
                            <Route path="/" element={
                                true
                                    ? <Main isAnimation={isAnimation} />
                                    : <MainTP />
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
            </I18nextProvider>
        </div >
    )
}

export default App