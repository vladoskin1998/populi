import React from 'react'
import { Link } from 'react-router-dom'


const route = ['Home', 'Our categories', 'Create events', 'New friends', 'About Us']

const RouteList = () => {
    return (
        <>
            {
                <ul className='header__list'>
                    {
                        route.map((r, index) =>
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