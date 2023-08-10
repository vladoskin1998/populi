import MainTitle from './MainTitle';
import { useEffect, useState } from "react"
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const MainInvite = () => {
    const { t } = useTranslation();
    const [isVisiable, setIsVisiable] = useState(true);


    const scrollToElement = () => {

        scroller.scrollTo("FOOTER", {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
        });

    };



    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#MainInvite');
            if (!element) return;

            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                if (isVisiable) return
                setIsVisiable(true);
            }
            else {
                setIsVisiable(false);
            }

        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='container__wraper'>
            <div className='main__invite' id="MainInvite">
                <h4 className='main--uptitle' >
                    {t('main.t1')}
                </h4>
                <h2 className='main__invite-title main__invite-title-1'>
                    <MainTitle trigger={isVisiable}>
                        {t('main.t2')}
                    </MainTitle >
                </h2>
                <h2 className='main__invite-title main__invite-title-2' >
                    <MainTitle trigger={isVisiable}>
                        {t('main.t3')}
                    </MainTitle>
                </h2>
                <h2 className='main__invite-title main__invite-title-3' >
                    <MainTitle trigger={isVisiable}>
                        {t('main.t4')}
                    </MainTitle>
                </h2>
                <button className='main__invite-button button__grad' onClick={scrollToElement}>
                    {t('main.t5')}
                </button>
                <p className='main__invite-parag'>
                    {t('main.t6')}
                </p>
            </div >
        </div >
    )
}

export default MainInvite