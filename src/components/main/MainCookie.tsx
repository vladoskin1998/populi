import { useEffect, useState } from 'react';
import { Cookies } from '../../svg/Cookies';
import { Close } from '../../svg/Close';
import { Link } from 'react-router-dom'
const MainCookie = () => {
    const [open, setOpen] = useState<boolean>(localStorage.getItem('cookieSeen') ? false : true);


    const handleClose = () => {
        console.log("close");

        localStorage.setItem('cookieSeen', 'false');
        setOpen(false);
    };

    return (
        open ?
            <div className='main__cookies'>
                <Cookies />
                <p>
                    We use cookies to offer you better user experience,
                    personalize content, provide social media features
                    and analyze traffic. Read about how we use
                    cookies and how you can control them in 
                    our <Link to={'policy'}>
                        <span>Privacy Policy </span>
                    </Link> and <Link to={'agreement'}>
                        <span>Cookie Policy</span>.
                    </Link>
                   
                    You consent that we use cookies if you continue using our website.
                </p>
                <button onClick={handleClose}>
                    <Close />
                </button>
            </div>
            : <></>
    );
};

export default MainCookie;



