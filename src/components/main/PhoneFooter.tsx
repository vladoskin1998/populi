import React from 'react'
import '../../style/main/main-footer.scss'
import { AppStoreWhite } from '../../svg/AppStore'
import { GooglePlayWhite } from '../../svg/GooglePlay'
import { ArrowLeft, ArrowRight } from '../../svg/Arrow'

const PhoneFooter = () => {
    return (
        <div className='main__footer-content'>
            <div className='main__footer-contentt-market'>
                <h3>Download</h3>
                <p>For iOS devices</p>
                <div className='main__footer-content-lable'>
                    <AppStoreWhite />
                </div>
                <div className='main__footer-content-left'>
                    <ArrowLeft />
                </div>

            </div>
            <div className='main__footer-contentt-market'>
                <h3>Download</h3>
                <p>For Android devices</p>
                <div className='main__footer-content-lable'>
                    <GooglePlayWhite />
                </div>

                <div className='main__footer-content-right'>
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}

export default PhoneFooter