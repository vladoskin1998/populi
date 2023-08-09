import React from 'react'
import { Circles } from '../main-animation/Circles'
import MainInvite from '../main/MainInvite'
import MainCategories from '../main/MainCategories'
import MainFindsFriend from '../main/MainFindsFriend'

const MainTP = () => {
  return (
    <div>
        {/* <Circles isAnimation ={true}/> */}
        <MainInvite />
        <MainCategories />
        <MainFindsFriend />
    </div>
  )
}

export default MainTP