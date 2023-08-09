import { useState } from 'react'
import '../../style/footer.scss'
import FooterList from './FooterList'

const Footer = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__body'>
                    <div className='footer__body-list'>
                        <FooterList />
                        <div className='modal--out' onClick={()=>setOpen(false)}/>
                    </div>
                    <button className='footer__button' onClick={() => setOpen((s) => !s)}>
                        {
                            open
                                ? <div className='footer__listmodal'>
                                    <FooterList />
                                </div>
                                : <></>
                        }
                        Menu
                    </button>
                    <div className='footer__app'>
                        © 2022 POPULI  Application. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer