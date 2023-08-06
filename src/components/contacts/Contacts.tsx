import { useEffect } from 'react';
import '../../style/contacts.scss'
import ContactsForm from './ContactsForm'
import { useTranslation } from 'react-i18next';

const Contacts = () => {

    const { t } = useTranslation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [])

    return (
        <div className='contacts'>
            <div className='contacts__container'>
                <h3 className='title'>
                    <h3>{t('contacts.t1')}</h3>
                    <h3>{t('contacts.t2')}</h3>
                </h3>
                <h4 className='contacts__subtitle'>
                {t('contacts.t3')}
                {t('contacts.t4')}
                </h4>
                <ContactsForm />
            </div>
        </div>
    )
}

export default Contacts