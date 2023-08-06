import React from 'react'

const MainFindsFriend = () => {


    return (
        <div className='main__finds'>
            <h4 className='main--uptitle'>Meetings you choose</h4>
            <div className='main__categories-title'>
                <p className='title main__categories-title-text' style={{ fontSize: "40px" }}>Can't find event
                </p>
                <p className='title main__categories-title-text' style={{ fontSize: "50px" }}> you want?
                </p>
            </div>
            <p className='main__categories-parag'>
                Create your own and invite friends or strangers, whoever you want! Use numerous but easy-to-use settings to create your perfect event!
            </p>
            <div className='main__finds--images'>
                <div className='main__finds--images-1' />
                <div className='main__finds--images-2' />
                <div className='main__finds--images-3' />
                <div className='main__finds--images-4' />
                <div className='main__finds--images-5' />
                <div className='main__finds--images-6' />
                <div className='main__finds--images-7' />
                <div className='main__finds--images-8' />
            </div>
            <div id='find-block' />
        </div>
    )
}

export default MainFindsFriend