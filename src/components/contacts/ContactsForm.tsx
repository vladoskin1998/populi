import React, { useState } from 'react'
import ContactsInfo from './ContactsInfo'
import { useTranslation } from 'react-i18next';
import ContactsModal from './ContactsModal';
import { DOMAIN } from '../../utils/const';

const ContactsForm = () => {
    const { t } = useTranslation();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [openModal, setOpenModal] = useState(false);

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const validateEmail = (email:string) => {
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const sendMessage = async () => {
       
        if (name.trim() === '') {
            setNameError('Name is required');
            return;
        }
        if (message.trim() === '') {
            setMessageError('Message is required');
            return;
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }

        try {
            const response = await fetch(DOMAIN + '/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.status === 200) {
                setOpenModal(true);
                setTimeout(() => {
                    setOpenModal(false);
                }, 1000);
                setName('');
                setEmail('');
                setMessage('');
                setNameError('');
                setEmailError('');
                setMessageError('');
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error');
        }
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
                    <input type="text"
                        value={name}
                        onChange={e => {
                            setName(e.target.value);
                            setNameError('');
                        }}
                        className='contacts__form_inputs-a'
                        placeholder={t('contacts.t7')}
                    />
                    {nameError && <p className="error-message">{nameError}</p>}

                    <input type="text"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                            setEmailError('');
                        }}
                        className='contacts__form_inputs-b'
                        placeholder={t('contacts.t8')}
                    />
                    {emailError && <p className="error-message">{emailError}</p>}

                    <input type="text"
                        value={message}
                        onChange={e => {
                            setMessage(e.target.value);
                            setMessageError('');
                        }}
                        className='contacts__form_inputs-c'
                        placeholder={t('contacts.t9')}
                    />
                    {messageError && <p className="error-message">{messageError}</p>}
                </div>
                <button onClick={sendMessage} className='contacts__form-button button__grad'>{t('contacts.t10')}</button>
            </div>
            {
                openModal ? <ContactsModal /> : <></>
            }
            <ContactsInfo />
        </div>
    )
}

export default ContactsForm;
