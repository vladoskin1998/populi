import React from 'react'
import ContactsInfo from './ContactsInfo'
import { useTranslation } from 'react-i18next';

const ContactsForm = () => {

    const { t } = useTranslation();

    return (
        <div className='contacts__form'>
            <div className='contacts__form-body'>
                <h3 className='contacts__form-body-title'>
                   {t('contacts.t5')}
                </h3>
                <h4 className='contacts__form-body-subtitle'>
                {t('contacts.t6')}
                </h4>
                <div className='contacts__form_inputs'>
                    <input type="text" className='contacts__form_inputs-a' placeholder={t('contacts.t7')}/>
                    <input type="text" className='contacts__form_inputs-b'placeholder={t('contacts.t8')}/>
                    <input type="text" className='contacts__form_inputs-c'placeholder={t('contacts.t9')}/>
                </div>
                <button className='contacts__form-button button__grad'>{t('contacts.t10')}</button>
            </div>
           <ContactsInfo />
        </div>
    )
}

export default ContactsForm