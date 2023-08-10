import React from 'react'
import { ReceiveSquare } from '../../svg/ReceiveSquare'
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

export const ButtonApp = () => {
    const { t } = useTranslation();

    const scrollToElement = () => {
        setTimeout(() => {
            scroller.scrollTo("FOOTER", {
                duration: 1000,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }, 300)
    };

    return (
        <Link
            to='/'>
            <button className='header__button-app button__grad' onClick={scrollToElement}>
                <ReceiveSquare /> {t('header.t2')}
            </button>

        </Link>

    )
}
