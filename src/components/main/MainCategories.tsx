import React from 'react'

const MainCategories = () => {
    return (
        <div className='main__categories'>
            <h4 className='main--uptitle'>How hard can it be</h4>
            <h3 className='title'>Numbers of events <br />
                by categories
            </h3>
            <div className='main__categories--general main__categories-1' />
            <div className='main__categories--general main__categories-2' />
            <div className='main__categories--general main__categories-3' />
            <div className='main__categories--general main__categories-4' />
            <div className='main__categories--general main__categories-5' />
            <p className='main__categories-parag'>
                Browse hundreds of other people's events in a few taps. Sort by categories, location, time, and other filters.
            </p>
        </div>
    )
}

export default MainCategories