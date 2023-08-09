import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';

const mark = ['MainInvite', 'MainCategories', 'MainFindsFriend', 'MainDifferent', 'MainFooter'];

const RouteList = () => {
    const { t } = useTranslation();
    const route = t("header.t1").split('|');

    const [linkClicked, setLinkClicked] = useState(false);
    const [id,setId] = useState(0)

    const scrollToElement = (index: number) => {
        scroller.scrollTo(mark[index], {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    useEffect(() => {
        if (linkClicked) {
            scrollToElement(id); 
            setLinkClicked(false); // Сбросить флаг после выполнения scrollTo
        }
    }, [linkClicked,id]);

    return (
        <>
            <ul className='header__list'>
                {route?.map((r: string, index: number) => (
                    <li key={index}>
                        <Link
                            to='/'
                            onClick={() => {
                                setId(index)
                                setLinkClicked(true); // Устанавливаем флаг перед переходом
                            }}
                        >
                            {r}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RouteList;
