import MainInvite from './MainInvite';
import MainPhone from './MainPhone';
import { useEffect } from 'react'
import MainCategories from './MainCategories';

const Main = () => {

  useEffect(() => {
    const letterElement = document.querySelector('.letter');
    const letterElementCircle4 = document.querySelector('#circle4');
    const phoneCircle = document.querySelector('.phone--circle');
    const app = document.querySelector('.header');

    setTimeout(() => {
      letterElement?.classList.add('hidden');
      letterElementCircle4?.classList.add('show');
      phoneCircle?.classList.add('phone--circle-move');
      app?.classList.add('app--opacity');
      document.body.style.overflow = 'scroll';
    }, 3000);
  }, []);


  return (
    <>
    <div className='main'>
      <div className='container__wraper'>
            <MainInvite />
            <MainCategories /> 
        <MainPhone />
      </div>
    </div>
    <div></div>
    <div className='main__site-line'></div>
    </>
    
  )
}

export default Main