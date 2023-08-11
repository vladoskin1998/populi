import { useEffect, useRef, useState, Suspense, lazy } from 'react'
import Loader from '../loader/Loader'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import "../../style/main/main.scss"
import "../../style/main-tp/main-tp.scss"
import MainTP from '../main-tablet-phone/MainTP'
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';
import Main from '../main/Main'
import { LANGUAGE } from '../../types/enum'
import { LanguageType } from '../../types/types'

const About = lazy(() => import('../about/About'));
const Contacts = lazy(() => import('../contacts/Contacts'));
const Agreement = lazy(() => import('../agreement/Agreement'));
const NotFound = lazy(() => import('../not-found/NotFound'));

const App = () => {

    const [language, setLanguage] = useState(LANGUAGE.EN)
    const [isDesktop, setIsDesktop] = useState(false);

    const appRef = useRef<any>(null)

    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoad(false)
        }, 3500)
    }, [])


    useEffect(() => {
        const userAgent = window.navigator.userAgent;

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isTablet = /Tablet|iPad/i.test(userAgent);

        setIsDesktop(!isMobile && !isTablet);
    }, []);

    useEffect(() => {

        appRef.current = document.querySelector('.app')

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        const currentPath = window.location.pathname;
        if (currentPath !== '/' && currentPath !== '/home') {
            window.location.href = '/';
        }

        setTimeout(() => {
            appRef!.current!.style!.background = 'transparent'
        }, 3000)
    }, []);


    return (
        <div className='app'>
            <Suspense>
                <I18nextProvider i18n={i18n}>
                    <Router>
                        {
                            isLoad
                                ? <Loader />
                                : <> <Header setLanguage={(s: LanguageType) => setLanguage(s)} />
                                    <div className='app__content' id="APP__CONTENT">
                                        <Routes>
                                            <Route path="/" element={
                                                isDesktop
                                                    ? <Main />
                                                    : <MainTP />
                                            } />
                                            <Route path="/about" element={
                                                <About />
                                            } />
                                            <Route path="/contacts" element={
                                                <Contacts />
                                            } />
                                            <Route path="/agreement" element={
                                                <Agreement language={language} title={"agreement"}/>
                                            } />
                                              <Route path="/policy" element={
                                                <Agreement language={language} title={"policy"} />
                                            } />
                                            <Route path="*" element={
                                                <NotFound /> // Подключаем компонент для 404
                                            } />
                                        </Routes>
                                    </div>
                                    <Footer />
                                </>}
                    </Router >
                </I18nextProvider>
            </Suspense>
        </div >
    )
}

export default App