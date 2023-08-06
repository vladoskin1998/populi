import React, { useEffect, useRef, useState } from 'react'
import { Circles } from '../main-animation/Circles'
import "../../style/main/phone.scss"
import { Link, Element, Events, scrollSpy } from 'react-scroll';

const MainPhone = ({ isAnimation }: { isAnimation: boolean }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const maskPhone = useRef<any>(null);
    const phoneRef = useRef<HTMLDivElement | null>(null);

    const imageRef = useRef<any>(null)
    const findBlock = useRef<any>(null)
    const differentBlock = useRef<any>(null)
    const footerBlock = useRef<any>(null)

    useEffect(() => {
        imageRef.current = document.querySelector('#image-ref');
        findBlock.current = document.querySelector('#find-block');
        differentBlock.current = document.querySelector('#different-block');
        footerBlock.current = document.querySelector('#footer-block');
    }, [])
  
    console.log(imageRef,findBlock);
    

    useEffect(() => {
        Events.scrollEvent.register('begin', () => {
            console.log('Начало скролла');
        });
 
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, []);

    const handleScroll = () => {
        setIsScrolled(window.scrollY !== 0);
    };

    useEffect(() => {
        const phoneCircle = document.querySelector('.phone--circle');
        window.addEventListener('scroll', handleScroll);
        if (isAnimation) {
            setTimeout(() => {
                phoneCircle?.classList.add('phone--circle-move');
            }, 3000);
        }
        else {
            phoneCircle?.classList.add('phone--circle-move--withot-animation');
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        const phoneCircle = document.querySelector('.circle');

        if (!isAnimation) {
            if (isScrolled) {
                phoneCircle?.classList.add('move--to--right');
            }
        }

    },
    [isScrolled, isAnimation])

    // useEffect(() => {
    //     const observerOptions = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5, // Минимальная видимость элемента (от 0 до 1), чтобы считать его видимым
    //     };

    //     const observerFindBlock  = new IntersectionObserver((entries) => {
    //         const [findBlock] = entries;
    //         if (!findBlock.isIntersecting) {
    //             phoneRef!.current!.classList.add('phone__move__left');
    //         }

    //     }, observerOptions);

    //     const observerSite = new IntersectionObserver((entries) => {
    //         const [imageEntry] = entries;
    //         if (!imageEntry.isIntersecting) {
    //             phoneRef!.current!.classList.add('phone__move__right');
    //         }

    //     }, observerOptions);



    //     if (imageRef?.current) {
    //         observerSite.observe(imageRef?.current);
    //     }

    //     if (findBlock?.current) {
    //         observerFindBlock.observe(findBlock?.current);
    //     }

    //     return () => {
    //         if (observerSite) {
    //             observerSite.disconnect();
    //         }
    //         if (findBlock) {
    //             observerFindBlock.disconnect();
    //         }
    //     };
    // }, []);






    return (
        <>
            <div className='phone'>
                <div className='phone--circle'>
                    <Circles isAnimation={isAnimation} />
                </div>
            </div>
            <div className='phone' style={{ zIndex: 10 }} id='#phone' ref={phoneRef}>
                <div className='phone__screen' />
                <div className='phone__block' ref={maskPhone}></div>
            </div>

        </>

    )
}

export default MainPhone