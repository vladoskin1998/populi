import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

const Phone = () => {


  const [phoneStyles, setPhoneStyles] = useSpring(() => ({
    transform: 'translate(0px ,0px)',
  }));

  const handleScroll = () => {

    const phoneElement = document.querySelector('#phone');

    const topMain = document.querySelector('#top--main');
    const bottomMain = document.querySelector('#bottom--main');


    const MainCategories = document.querySelector('#MainCategories');
    const MainFindsFriend = document.querySelector('#MainFindsFriend');
    const MainDifferent = document.querySelector('#MainDifferent');
    const MainFooter = document.querySelector('#MainFooter');

  
    if(!topMain || !bottomMain || !phoneElement){
        return
    }
  
   
    const phoneRect = phoneElement.getBoundingClientRect();
 
    const topMainRect = topMain.getBoundingClientRect();
    const bottomMainRect = bottomMain.getBoundingClientRect();


    if (phoneRect.top >= topMainRect.top && phoneRect.bottom <= topMainRect.bottom) {
      // #phone находится над #col
      setPhoneStyles({ transform: 'translate(0px, 0px)'});
    } else if (phoneRect.top >= bottomMainRect.top && phoneRect.bottom <= bottomMainRect.bottom) {
      // #phone находится над #dif
      setPhoneStyles({ transform: `translate( ${ (((window.innerWidth*0.2)) + 140) * (-1)}px, ${window.innerHeight - 150 - 50 - 600 < 0 ? 0 : window.innerHeight - 150 - 50 - 600 }px)`});
    } 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <animated.div id="phone" style={phoneStyles} className='phone__anim_spr'>
        {/* Контент блока phone */}
        <div className='phone__screen'/>
      </animated.div>
    </>
  );
};

export default Phone;
