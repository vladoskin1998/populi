import React from 'react'
import { AppStoreWhite } from '../../svg/AppStore'
import { GooglePlayWhite } from '../../svg/GooglePlay'

const MainTPFooter = () => {
    return (
        <div className='container__wraper'>
            <h4 className='main--uptitle' >
                The best place for events
            </h4>
            <div className='main__tp_footer' id='MainFooter'>
                <div className='main__tp_footer-body'>
                    <h5>Download</h5>
                    <AppStoreWhite />
                    <GooglePlayWhite />
                </div>
                <div className='main__tp_footer-phone' />
            </div>
        </div>
    )
}

export default MainTPFooter