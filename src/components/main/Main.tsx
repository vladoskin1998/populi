import MainInvite from './MainInvite';
import "../../style/main/phone.scss"
import Phone from './Phone';
import SiteImage from './SiteImage';
import { Circles } from '../main-animation/Circles';
import { lazy } from 'react';

const MainFindsFriend = lazy(() => import('./MainFindsFriend'));
const MainCategories = lazy(() => import('./MainCategories'));
const MainDifferent = lazy(() => import('./MainDifferent'));
const MainSidePanel = lazy(() => import('./MainSidePanel'));
const MainFooter = lazy(() => import('./MainFooter'));


const Main = () => {

  return (
      <div className='main'>
        <MainSidePanel />
        <div id="top--main" style={{ zIndex: 3 , position: 'relative'}}>
          <MainInvite />
          <MainCategories />
        </div>
        <div id="bottom--main" style={{ zIndex: 3, position: 'relative' }}>
          <MainFindsFriend />
          <MainDifferent />
          <MainFooter />
        </div>
        <Phone />
        <SiteImage />
        <Circles />
      </div>
  )
}

export default Main