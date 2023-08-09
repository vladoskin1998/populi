import '../../style/header.scss'
import { Logo } from '../../svg/Logo'
import LanguageSelect from './LanguageSelect'
import RouteList from './RouteList'
import { ButtonApp } from './ButtonApp'
import Burger from './Burger'


const Header = () => {

 


    return (
        <nav className='header'>
            <div className='container'>
                <div className='header__body'>
                    <div className='header__logo'>
                        <Logo />
                    </div>
                    <div className='header__nav'>
                        <RouteList />
                    </div>
                    <div className='header__button'>
                        <ButtonApp />
                    </div>
                    <LanguageSelect />
                    <Burger />
                </div>
            </div>
        </nav>
    )
}

export default Header