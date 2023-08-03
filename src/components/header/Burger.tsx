import { useState } from 'react'
import { BurgerLogo } from '../../svg/BurgerLogo'
import RouteList from './RouteList'
import { ButtonApp } from './ButtonApp'

const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='header__burger'>
            <button className='header__burger-logo' onClick={() => setOpen(true)}>
                <BurgerLogo />
            </button>
            {
                open ?
                    <div className='header__burger-modal'>
                        <div className='header__burger-list' onClick={() => setOpen(false)}>
                            <RouteList />
                        </div>
                        <div  className='header__burger-button'>
                            <ButtonApp />
                        </div>
                    </div>
                    : <></>
            }

        </div>
    )
}

export default Burger