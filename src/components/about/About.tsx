import { useEffect } from 'react'
import '../../style/about.scss'
import AboutButton from './AboutButton'
import { useTranslation } from 'react-i18next';

const About = () => {

    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [])

    // const { t } = useTranslation();
    // const list = t("about.submain").split('|')

    return (
        <div className='about'>
            <div className='container__wraper'>
                <h3 className='title'>
                    {t('about.t1')}
                </h3>
                <div className='about__body'>
                    <div className='about__body-image'></div>
                    <div className='about__body-text'>
                        <div className='about__body-title'>
                            <b> {t('about.t2')}</b>
                            {t('about.t3')}
                            <b> {t('about.t4')}</b>
                        </div>
                        <div className='about__body-subtitle'> {t('about.t5')}</div>
                        <h4 className='about__body-undertitle'> {t('about.t6')}</h4>
                        <AboutButton />
                    </div>
                </div>
                <div className='about__parag'>
                    <p>
                        {t('about.t7')}
                    </p>
                    <p>
                        {t('about.t8')}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About