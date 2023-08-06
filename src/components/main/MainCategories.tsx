import { useEffect, useState } from "react"


const MainCategories = ({ isAnimation }: { isAnimation: boolean }) => {

    useEffect(() => {
        const main__invitetitle = document.querySelectorAll('.main__categories-title-text');

        setTimeout(() => {
            main__invitetitle.forEach((element) => {
                element?.classList.add('title--animation');
            })
        }, 4000);
})

    return (
        <div className='main__categories'>
            <h4 className='main--uptitle'>How hard can it be</h4>
            <div className='main__categories-title'>
                <h3 className='title main__categories-title-text' style={{ fontSize: "40px" }}>Numbers of events

                </h3>
                <h3 className='title main__categories-title-text' style={{ fontSize: "50px" }}>  by categories

                </h3>
            </div>
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