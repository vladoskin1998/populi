import { useEffect, useState } from "react"
import '../../style/main/main-finds.scss'
import MainTitle from './MainTitle';
import { useTranslation } from 'react-i18next';

const MainFindsFriend = () => {

    const [isVisiable, setIsVisiable] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#MainFindsFriend');
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

        <div className='main__finds' id='MainFindsFriend'>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
                        <h4 className='main--uptitle'>
                            {t('main.t11')}
                        </h4>
                        <div className='main__categories-title'>
                            <p className='title main__categories-title-text' style={{ fontSize: "40px" }}>
                          
                                    {t('main.t12')}
                     
                            </p>
                            <p className='title main__categories-title-text' style={{ fontSize: "50px" }}>
                            
                                    {t('main.t13')}
                            
                            </p>
                        </div>
                        <p className='main__categories-parag'>
                            {t('main.t14')}
                        </p>
                        <div className='main__finds--images-1 main__finds--images--general' />
                        <div className='main__finds--images-2 main__finds--images--general' />
                        <div className='main__finds--images-3 main__finds--images--general' />
                    </div>
                    <div className="main__finds--body-2"></div>
                </div>
            </div>

            <div className='main__finds--fixed'>
                <div className='main__finds--fixed-body'>
                    <div className='main__finds--images-4 main__finds--images--general' />
                    <div className='main__finds--images-5 main__finds--images--general' />
                    <div className='main__finds--images-6 main__finds--images--general' />
                    <div className='main__finds--images-7 main__finds--images--general' />
                    <div className='main__finds--images-8 main__finds--images--general' />
                </div>
            </div>
        </div>
    )
}

export default MainFindsFriend