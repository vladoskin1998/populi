import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

const url = [
    '/',
    'about',
    'contacts',
    'agreement',
    'agreement'
]


const FooterList = () => {
    const { t } = useTranslation();
    const list = t("footer.t1").split('|')


    const scrollToElement = () => {
        scroller.scrollTo('APP__CONTENT', {
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
    
      };

    return (
        <ul className='footer__list'>
            {
                list.map((item:string, index:number) => <li key={index} onClick={scrollToElement}>
                    <Link to={url[index]}>
                        {item}
                    </Link>
                </li>)
            }
        </ul>
    )
}

export default FooterList