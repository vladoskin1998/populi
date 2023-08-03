import { Location } from '../../svg/Location'
import { OpenMail } from '../../svg/OpenMail'
import { Phone } from '../../svg/Phone'

const ContactsInfo = () => {
    return (
        <div className='contacts__form-info'>
            <div className='contacts__form-info-body'>
                <div className='contacts__form-info-item'>
                    <div className='contacts__form-info-item-a'>
                        HEAD OFFICE:
                    </div>
                    <div className='contacts__form-info-item-b'>
                        <Location />
                    </div>
                    <div className='contacts__form-info-item-c'>
                        El-Mahalla El-Kubra 371776 <br />
                        Damietta Egypt
                    </div>
                </div>

                <div className='contacts__form-info-item'>
                    <div className='contacts__form-info-item-a'>
                        PHONES:
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
                        WRITE US:
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