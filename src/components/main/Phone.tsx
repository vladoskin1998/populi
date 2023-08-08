import React, { useEffect, useState } from 'react';
import { useSpring, animated, useTransition } from '@react-spring/web'
import PhoneFooter from './PhoneFooter';
import '../../style/main/main-footer.scss'

const Phone = ({ setCount }: { setCount: (s: string) => void }) => {

  const [phoneStyles, setPhoneStyles] = useSpring(() => ({ transform: 'translate(0px ,0px)', }));
  const [phoneScreenStyles, setPhoneScreenStyles] = useSpring(() => ({ transform: 'translateX(0px)', }));
  const [androidScreenStyles, setAndroidScreenStyles] = useSpring(() => ({ transform: 'translateX(0px)', opacity: 0 }));
  const [springPhoneFooter, setSpringPhoneFooter] = useSpring(() => (
    { width: 0, height: 0, opasity: 0 }
  ))
  const [phoneImage, setPhoneImage] = useState('')

  const transitions = useTransition(phoneImage, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400 },
  });



  const animatePhoneFooter = async (next: any) => {

    await new Promise(resolve => setTimeout(resolve, 200));
    await next({ height: 20, width: 0, opasity: 1 });
    await new Promise(resolve => setTimeout(resolve, 400));
    await next({ height: 20, width: 954 });
    await new Promise(resolve => setTimeout(resolve, 300));
    await next({ height: 320, width: 954 });
  };

  const handleScroll = () => {



    const phoneElement = document.querySelector('#phone');
    const phoneScreen = document.querySelector('#phone__screen');


    const topMain = document.querySelector('#top--main');
    const bottomMain = document.querySelector('#bottom--main');
    const MainFindsFriend = document.querySelector('#MainFindsFriend');
    const MainDifferent = document.querySelector('#MainDifferent');
    const MainFooter = document.querySelector('#MainFooter');

    if (!phoneScreen || !topMain || !bottomMain || !phoneElement || !MainFindsFriend || !MainDifferent || !MainFooter) {
      return
    }

    const phoneRect = phoneElement.getBoundingClientRect();
    const phoneScreenRect = phoneScreen.getBoundingClientRect();

    const topMainRect = topMain.getBoundingClientRect();
    const bottomMainRect = bottomMain.getBoundingClientRect();

    const MainFindsFriendRect = MainFindsFriend.getBoundingClientRect();
    const MainDifferentRect = MainDifferent.getBoundingClientRect();
    const MainFooterRect = MainFooter.getBoundingClientRect();


    if (phoneRect.top >= topMainRect.top && phoneRect.bottom <= topMainRect.bottom) {
      setPhoneStyles({ transform: 'translate(0px, 0px)' });
    } else if (phoneRect.top >= bottomMainRect.top && phoneRect.bottom <= bottomMainRect.bottom) {
      setPhoneStyles({ transform: `translate( ${(((window.innerWidth * 0.2)) + 140) * (-1)}px, ${window.innerHeight - 150 - 50 - 600 < 40 ? -40 : window.innerHeight - 150 - 50 - 600}px)` });
    }

    if (phoneRect.top >= MainFindsFriendRect.top && phoneRect.bottom <= MainFindsFriendRect.bottom) {
      setPhoneImage('/Images/profile2.png')
      setCount('03  ')
    } else if (phoneRect.top >= MainDifferentRect.top && phoneRect.bottom <= MainDifferentRect.bottom) {
      setCount('04')
      setPhoneImage('/Images/profile3.png')
      setPhoneScreenStyles({ transform: 'translateX(0px)' })
      setAndroidScreenStyles({ transform: 'translateX(0px)', opacity: 0 })

    } else if (phoneRect.top >= MainFooterRect.top && phoneRect.bottom <= MainFooterRect.bottom) {
      //footer-animation
      setCount('05')
      setPhoneImage('/Images/profile4.png')
      setPhoneScreenStyles({ transform: 'translateX(-60px)' })
      setAndroidScreenStyles({ transform: 'translateX(60px)', opacity: 1 })


    } else if (phoneScreenRect.bottom >= bottomMainRect.top) {
      setPhoneImage('/Images/profile1.png')
      setCount('02')
      //     setSpringPhoneFooter({ width: 0, height: 0,opasity: 0  })
    } else {
      setPhoneImage('')
      setCount('01')
      //   setSpringPhoneFooter({ width: 0, height: 0, opasity: 0 })
    }

  };

  useEffect(() => {

    if (phoneImage === '/Images/profile4.png') {
      animatePhoneFooter(setSpringPhoneFooter);

    } else {
      setSpringPhoneFooter({ height: 0, width: 0, opasity: 0 });
    }
  }, [phoneImage, setPhoneImage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <animated.div id="phone" style={{ ...phoneStyles }} className='phone'>
        <animated.div className='phone__screen' id='phone__screen' style={{ ...phoneScreenStyles }} />
        <animated.div className='phone-android' id='phone__screen-android' style={{ ...androidScreenStyles }} />
        {
          phoneImage === '/Images/profile4.png' ?
            <div className='main__footer-phone'  >
              <div className='main__footer-phone-wrap' >
                <animated.div className='main__footer-phone-wrap-body' style={{ ...springPhoneFooter }}>
                  <PhoneFooter />
                </animated.div>
              </div>
            </div> : <></>
        }
        {transitions(
          (style, item) => item && <animated.img src={item} alt="" className='phone__screenshot' style={{ ...style, ...phoneScreenStyles }} />
        )}
      </animated.div>
    
  );
};

export default Phone;
