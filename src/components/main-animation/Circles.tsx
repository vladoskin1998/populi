


import { useEffect, useState } from 'react';
import Points from './Points'
import "../../style/main/circle.scss"
import { useSpring, animated, config } from '@react-spring/web'


export const Circles = () => {
    const bezierConfig = config.default

    const springProps = useSpring({
        from: { marginLeft: 0,   opacity: 0.8 },
        to: { marginLeft: ((window.innerWidth - 960) / 2) + 960 - 350 , opacity: 1  },
        config: { duration: 1000 }, // Используем настроенную кривую Безье
    });


    return (
        <div className='circle'>
            <animated.div style={springProps} >
                <div style={{ position: 'relative'}}>
                <div style={{ position: 'absolute', top: 0, left: 0 }}>
                    <svg className='circle__svg' width="960" height="960" viewBox="0 0 1448 1448" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="circle1" opacity="0.1" cx="724" cy="724" r="723" stroke="url(#paint0_linear_7_55)" stroke-width="2" stroke-dasharray="30 30" />
                        <circle id="circle2" opacity="0.3" cx="724" cy="724" r="547" stroke="url(#paint1_linear_7_55)" stroke-width="2" stroke-dasharray="20 20" />
                        <circle id="circle3" opacity="0.6" cx="724" cy="724" r="409" stroke="url(#paint2_linear_7_55)" stroke-width="2" stroke-dasharray="10 10" />
                        <circle id="circle-gradient" cx="724" cy="724" r="310" fill="url(#paint3_linear_7_55)" />
                        <defs>
                            <linearGradient id="paint0_linear_7_55" x1="0" y1="0" x2="1626.62" y2="1207.35" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0014FF" />
                                <stop offset="1" stop-color="#FF2CDF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_7_55" x1="176" y1="176" x2="1407.2" y2="1089.85" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0014FF" />
                                <stop offset="1" stop-color="#FF2CDF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_7_55" x1="314" y1="314" x2="1235.15" y2="997.723" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0014FF" />
                                <stop offset="1" stop-color="#FF2CDF" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_7_55" x1="414" y1="414" x2="1110.48" y2="930.961" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0014FF" />
                                <stop offset="1" stop-color="#FF2CDF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                </div>
               

                <Points />
            </animated.div>

        </div>
    )
}
