import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const url = [
    '/',
    'about',
    'contacts',
    '/',
    'agreement'
]


const FooterList = () => {
    const { t } = useTranslation();
    const list = t("footer.t1").split('|')

    return (
        <ul className='footer__list'>
            {
                list.map((item:string, index:number) => <li>
                    <Link to={url[index]}>
                        {item}
                    </Link>
                </li>)
            }
        </ul>
    )
}

export default FooterList