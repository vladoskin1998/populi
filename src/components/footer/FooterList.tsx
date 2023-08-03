import React from 'react'
import { Link } from 'react-router-dom'

const list = [
    'Home',
    'About',
    'Contacts',
    'Privacy policy',
    'Terms Of Use'
]

const url = [
    '/',
    'about',
    'contacts',
    '/',
    'agreement'
]


const FooterList = () => {
    return (
        <ul className='footer__list'>
            {
                list.map((item, index) => <li>
                    <Link to={url[index]}>
                        {item}
                    </Link>
                </li>)
            }
        </ul>
    )
}

export default FooterList