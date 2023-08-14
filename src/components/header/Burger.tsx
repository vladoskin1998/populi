import { useState, useEffect, useRef } from 'react';
import { BurgerLogo } from '../../svg/BurgerLogo';
import RouteList from './RouteList';
import { ButtonApp } from './ButtonApp';

const Burger = () => {
    const [open, setOpen] = useState(false);
    const burgerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (burgerRef.current && !burgerRef.current.contains(event.target as Node )) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header__burger' ref={burgerRef}>
            <button className='header__burger-logo' onClick={() => setOpen(true)}>
                <BurgerLogo />
            </button>
            {open ? (
                <div className='header__burger-modal'>
                    <div className='header__burger-list'>
                        <RouteList click={() => setOpen(false)} />
                    </div>
                    <div className='header__burger-button'>
                        <ButtonApp />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Burger;