import React from 'react'
import '../../style/main/main-finds.scss'

const MainFindsFriend = () => {

    return (

        <div className='main__finds' id='MainFindsFriend'>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
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

                        <div className='main__finds--images-1 main__finds--images--general' />
                        <div className='main__finds--images-2 main__finds--images--general' />
                        <div className='main__finds--images-3 main__finds--images--general' />


                    </div>
                    <div className="main__finds--body-2"></div>
                </div>
            </div>

            <div className='main__finds--fixed'>
                <div className='main__finds--fixed-body'>
                    <div className='main__finds--images-4 main__finds--images--general' />
                    <div className='main__finds--images-5 main__finds--images--general' />
                    <div className='main__finds--images-6 main__finds--images--general' />
                    <div className='main__finds--images-7 main__finds--images--general' />
                    <div className='main__finds--images-8 main__finds--images--general' />
                </div>

            </div>
        </div>
    )
}

export default MainFindsFriend