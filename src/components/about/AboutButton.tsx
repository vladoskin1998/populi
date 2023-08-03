import React from 'react'
import { AppStore } from '../../svg/AppStore'
import { GooglePlay } from '../../svg/GooglePlay'

const AboutButton = () => {
  return (
    <div className='about__button'>
        <button>
            <AppStore />
        </button>
        <button>
            <GooglePlay />
        </button>
    </div>
  )
}

export default AboutButton