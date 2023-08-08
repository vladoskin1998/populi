import MainInvite from './MainInvite';
import "../../style/main/phone.scss"
import Phone from './Phone';
import SiteImage from './SiteImage';
import { Circles } from '../main-animation/Circles';
import { lazy, useState } from 'react';
import MainCounter from './MainCounter';
import MainCookie from './MainCookie'

const MainFindsFriend = lazy(() => import('./MainFindsFriend'));
const MainCategories = lazy(() => import('./MainCategories'));
const MainDifferent = lazy(() => import('./MainDifferent'));
const MainSidePanel = lazy(() => import('./MainSidePanel'));
const MainFooter = lazy(() => import('./MainFooter'));

const Main = () => {

  const [count, setCount] = useState('01')

  return (
    <div className='main'>
      <MainSidePanel />
      <div id="top--main" style={{ zIndex: 3, position: 'relative' }}>
        <MainInvite />
        <MainCategories />
      </div>
      <div id="bottom--main" style={{ zIndex: 3, position: 'relative' }}>
        <MainFindsFriend />
        <MainDifferent />
        <MainFooter />
      </div>
      <Phone setCount={setCount} />
      <SiteImage />
      <Circles />
      <MainCounter count={count} />
      <MainCookie />
    </div>
  )
}

export default Main