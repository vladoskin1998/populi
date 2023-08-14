import { useState ,useRef , useEffect} from 'react'
import '../../style/footer.scss'
import FooterList from './FooterList'


const Footer = () => {

    const [open, setOpen] = useState(false)

    const footerModal = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (footerModal.current && !footerModal.current.contains(event.target as Node )) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='footer' id="FOOTER">
             <div className='container__wraper'>
                <div className='footer__body'>
                    <div className='footer__body-list'>
                        <FooterList />
                    </div>
                    <button className='footer__button' onClick={() => setOpen((s) => !s)}>
                        {
                            open
                                ? <div className='footer__listmodal' ref={footerModal}>
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