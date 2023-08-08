import '../../style/main/main-different.scss'
import MainTitle from './MainTitle';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainDifferent = () => {

    const { t } = useTranslation();
    const [isVisiable, setIsVisiable] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#MainDifferent');
            if (!element) return;

            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisiable(true);
            }

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='main__diff' id='MainDifferent'>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
                        <h4 className='main--uptitle'>{t('main.t15')}</h4>
                        <div className='main__categories-title'>
                            <p className='title main__categories-title-text' style={{ fontSize: "40px" }}>

                                {t('main.t16')}

                            </p>
                            <p className='title main__categories-title-text' style={{ fontSize: "50px" }}>

                                {t('main.t17')}

                            </p>
                        </div>
                        <p className='main__categories-parag'>
                            {t('main.t18')}
                        </p>
                        <div className='main__diff-img'>
                            <div className='main__diff-img-6  main__finds--images--general' />
                            <div className='main__diff-img-7  main__finds--images--general' />
                        </div>
                        <div className="main__finds--body-2"></div>
                    </div>
                </div>
            </div>
            <div className='main__diff--fixed'>
                <div className='main__diff--fixed-body'>
                    <div className='main__diff-img-1 main__diff--images--general' />
                    <div className='main__diff-img-2 main__diff--images--general' />
                    <div className='main__diff-img-3 main__diff--images--general' />
                    <div className='main__diff-img-4 main__diff--images--general' />
                    <div className='main__diff-img-5 main__diff--images--general' />
                </div>
            </div>
        </div>
    )
}

export default MainDifferent