import React from 'react'
import { Circles } from './Circles'
import "../../style/main/phone.scss"

const MainPhone = () => {
    return (
        <>
            <div className='phone'>
                <div className='phone--circle'>
                    <Circles />
                </div>
            
            </div>
            <div className='phone' style={{zIndex: 10}}>
                <div className='phone__screen' />
            </div>
        </>

    )
}

export default MainPhone