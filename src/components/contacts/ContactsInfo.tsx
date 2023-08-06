import { Location } from '../../svg/Location'
import { OpenMail } from '../../svg/OpenMail'
import { Phone } from '../../svg/Phone'


import { useTranslation } from 'react-i18next';



const ContactsInfo = () => {
    const { t } = useTranslation();
    return (
        <div className='contacts__form-info'>
            <div className='contacts__form-info-body'>
                <div className='contacts__form-info-item'>
                    <div className='contacts__form-info-item-a'>
                        {t('contacts.t11')}
                    </div>
                    <div className='contacts__form-info-item-b'>
                        <Location />
                    </div>
                    <div className='contacts__form-info-item-c'>
                        {t('contacts.t12')} <br />
                        {t('contacts.t13')}
                    </div>
                </div>

                <div className='contacts__form-info-item'>
                    <div className='contacts__form-info-item-a'>
                        {t('contacts.t114')}
                    </div>
                    <div className='contacts__form-info-item-b'>
                        <Phone />
                    </div>
                    <div className='contacts__form-info-item-c'>
                        {'+1 (850) 987 51 33'}
                    </div>
                </div>

                <div className='contacts__form-info-item'>
                    <div className='contacts__form-info-item-a'>
                        {t('contacts.t15')}
                    </div>
                    <div className='contacts__form-info-item-b'>
                        <OpenMail />
                    </div>
                    <div className='contacts__form-info-item-c'>
                        info@site.com
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactsInfo