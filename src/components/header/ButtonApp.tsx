import React from 'react'
import { ReceiveSquare } from '../../svg/ReceiveSquare'
import { useTranslation } from 'react-i18next';

export const ButtonApp = () => {
    const { t } = useTranslation();
    return (
        <button className='header__button-app button__grad'>
            <ReceiveSquare /> {t('header.t2')}
        </button>
    )
}
