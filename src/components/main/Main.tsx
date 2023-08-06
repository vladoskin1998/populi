import MainInvite from './MainInvite';
import MainPhone from './MainPhone';
import { useEffect, useRef } from 'react'
import MainCategories from './MainCategories';
import MainSidePanel from './MainSidePanel';
import MainFindsFriend from './MainFindsFriend'
import MainDifferent from './MainDifferent';
const Main = ({ isAnimation }: { isAnimation: boolean }) => {




  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    const letterElementCircle4 = document.querySelector('#circle4');
    const phoneCircle = document.querySelector('.phone--circle');
    const appOpacityElements = document.querySelectorAll('.header, .main__invite, .main__categories, .phone__screen, .main__site-line, .main__side-panel, footer');

    if (isAnimation) {
      setTimeout(() => {

        letterElementCircle4?.classList.add('show');
        phoneCircle?.classList.add('phone--circle-move');

        appOpacityElements.forEach((element) => {
          element.classList.add('app--opacity');
        });
      }, 3000);
    }
    else {
      letterElementCircle4?.classList.add('show--withot-animation');
      phoneCircle?.classList.add('phone--circle-move--withot-animation');

      appOpacityElements.forEach((element) => {
        element.classList.add('app--opacity--withot-animation');
      });
    }
  }, []);

  return (
    <>
      <div className='main'>
        <div className='container__wraper'>
          <MainSidePanel />
          <MainInvite isAnimation={isAnimation} />
          <MainCategories isAnimation={isAnimation} />
          <MainPhone isAnimation={isAnimation}  />
          <MainFindsFriend />
          <MainDifferent />
        </div>
      </div>
      <div id='image-ref' className='main__site-line'></div>
    </>

  )
}

export default Main