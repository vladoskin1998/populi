
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';


const MainInvite = () => {
    const { t } = useTranslation();

    const scrollToElement = () => {

        scroller.scrollTo("FOOTER", {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
        });

    };


    return (
        <div className='container__wraper' >
            <div className='main__invite' id="MainInvite">
                <h4 className='main--uptitle slide__title' >
                    {t('main.t1')}
                </h4>
                <h2 className='main__invite-title main__invite-title-1 animation__title--general animation__title' >
                    {t('main.t2')}
                </h2>
                <h2 className='main__invite-title main__invite-title-2 animation__title--general animation__title' >
                    {t('main.t3')}
                </h2>
                <h2 className='main__invite-title main__invite-title-3 animation__title--general animation__title' >
                    {t('main.t4')}
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