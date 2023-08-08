import React, { useState } from 'react'
import ContactsInfo from './ContactsInfo'
import { useTranslation } from 'react-i18next';
import ContactsModal from './ContactsModal';

const ContactsForm = () => {

    const { t } = useTranslation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [openModal, setOpenModal] = useState(true)

    const sendMessage = async () => {
        await setTimeout(() => { }, 2000)

        setName('')
        setEmail('')
        setMessage('')
    }
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
                    <input type="text" className='contacts__form_inputs-a' placeholder={t('contacts.t7')} />
                    <input type="text" className='contacts__form_inputs-b' placeholder={t('contacts.t8')} />
                    <input type="text" className='contacts__form_inputs-c' placeholder={t('contacts.t9')} />
                </div>
                <button className='contacts__form-button button__grad'>{t('contacts.t10')}</button>
            </div>
            {
                false ? <ContactsModal /> : <></>
            }
            <ContactsInfo />
        </div>
    )
}

export default ContactsForm