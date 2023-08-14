import React from 'react'
import '../../style/main/main-footer.scss'
import { AppStoreWhite } from '../../svg/AppStore'
import { GooglePlayWhite } from '../../svg/GooglePlay'
import { ArrowLeft, ArrowRight } from '../../svg/Arrow'
import { useTranslation } from 'react-i18next';

const PhoneFooter = () => {


    const { t } = useTranslation();
    return (
        <div className='main__footer-content'>
            <h4 className='main--uptitle' style={{ opacity: 1 }}>
                {t('main.t19')}
            </h4>
            <div className='main__footer-contentt-market'>
                <h3>   {t('main.t20')}</h3>
                <p> {t('main.t21')}</p>
                <button className='main__footer-content-lable main__footer-button'>
                    <AppStoreWhite />
                </button>
                <div className='main__footer-content-left'>
                    <ArrowLeft />
                </div>

            </div>
            <div className='main__footer-contentt-market'>
                <h3> {t('main.t20')}</h3>
                <p> {t('main.t22')}</p>
                <button className='main__footer-content-lable main__footer-button'>
                    <GooglePlayWhite />
                </button>

                <div className='main__footer-content-right'>
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}

export default PhoneFooter