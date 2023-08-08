import React, { ReactNode, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../../style/main/main.scss';

const MainTitle = ({ children, trigger }: { children: ReactNode, trigger?: boolean }) => {


    // console.log("trigger---->", children ,trigger);
    const [animationCompleted, setAnimationCompleted] = useState(true)

    const { backgroundSize, textColor, backgroundPosition } = useSpring({
        from: { backgroundSize: '0% 95%', textColor: 'transparent', backgroundPosition: 'left' },
        to: async (next) => {
            await next({ backgroundSize: '100% 95%', textColor: 'transparent' });
            await next({ textColor: '#232323' });
            await next({ backgroundSize: '0% 95%', backgroundPosition: 'right' });
            await next({ backgroundSize: '0% 95%', backgroundPosition: 'left' });

        },
        reset: trigger,
        config: { duration: 1000 },

    });



    return (
        <div className='main--general--titles' >
            <animated.div
                className='main--general--titles--bg'
                style={{ backgroundSize, backgroundPosition }}
            >
                <animated.div style={{ color: textColor }}>
                    {children}
                </animated.div>
            </animated.div>
        </div>
    );
};

export default MainTitle;



