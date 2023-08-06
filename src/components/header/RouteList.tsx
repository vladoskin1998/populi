import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const RouteList = () => {

    const { t } = useTranslation();
    const route = t("header.t1").split('|')

    return (
        <>
            {
                <ul className='header__list'>
                    {
                        route?.map((r:string, index:number) =>
                            <li>
                                {r}
                                {/* <Link to={r}>{route[index]}</Link> */}
                            </li>
                        )
                    }
                </ul>
            }
        </>
    )
}

export default RouteList