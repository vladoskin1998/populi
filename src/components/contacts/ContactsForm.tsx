import React from 'react'
import ContactsInfo from './ContactsInfo'

const ContactsForm = () => {
    return (
        <div className='contacts__form'>
            <div className='contacts__form-body'>
                <h3 className='contacts__form-body-title'>
                    If you have questions please
                    contact us
                </h3>
                <h4 className='contacts__form-body-subtitle'>
                    Fill in the fields and our specialists will quickly contact you to resolve your issues
                </h4>
                <div className='contacts__form_inputs'>
                    <input type="text" className='contacts__form_inputs-a' placeholder='Name'/>
                    <input type="text" className='contacts__form_inputs-b'placeholder='Email'/>
                    <input type="text" className='contacts__form_inputs-c'placeholder='Question'/>
                </div>
                <button className='contacts__form-button button__grad'>Send message</button>
            </div>
           <ContactsInfo />
        </div>
    )
}

export default ContactsForm