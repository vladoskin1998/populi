import '../../style/contacts.scss'
import ContactsForm from './ContactsForm'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts__container'>
                <h3 className='title'>
                    <h3>Look around you</h3>
                    <h3>Everything is changing.</h3>
                </h3>
                <h4 className='contacts__subtitle'>
                    What if the time has come for you to change? Starting a collaboration is easy! Order a free
                    consultation or call back. We are always in touch and happy to cooperate with you
                </h4>
                <ContactsForm />
            </div>
        </div>
    )
}

export default Contacts