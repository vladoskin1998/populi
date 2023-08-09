import React from 'react'
import { Circles } from '../main-animation/Circles'
import MainInvite from '../main/MainInvite'
import MainCategories from '../main/MainCategories'
import MainFindsFriend from '../main/MainFindsFriend'
import MainDifferent from '../main/MainDifferent'
import MainTPFooter from './MainTPFooter'

const MainTP = () => {
  return (  
    <div>
      <div className='main__tp__circle'>
        <Circles />
        <div className='main__tp__phone' />
        <div className='main__tp__phone-site'/>
        <MainInvite />
      </div>
      <MainCategories />
      <MainFindsFriend />
      <MainDifferent />
      <MainTPFooter />
    </div>
  )
}

export default MainTP