import '../../style/main/main-different.scss'

const MainDifferent = () => {
    return (

        <div className='main__diff' id='MainDifferent'>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
                        <h4 className='main--uptitle'>No time to be bored</h4>
                        <div className='main__categories-title'>
                            <p className='title main__categories-title-text' style={{ fontSize: "40px" }}> Different people,
                            </p>
                            <p className='title main__categories-title-text' style={{ fontSize: "50px" }}> same values
                            </p>
                        </div>

                        <p className='main__categories-parag'>
                            Easily find people, who share your interests, nearby or all around the globe. Everyone in Populi is open to communication, new acquaintances, and experience.
                        </p>
                        <div className='main__diff-img'>
                            <div className='main__diff-img-6  main__finds--images--general' />
                            <div className='main__diff-img-7  main__finds--images--general' />
                        </div>
                        <div className="main__finds--body-2"></div>
                    </div>
                </div>
            </div>
            <div className='main__diff--fixed'>
                <div className='main__diff--fixed-body'>
                    <div className='main__diff-img-1 main__diff--images--general' />
                    <div className='main__diff-img-2 main__diff--images--general' />
                    <div className='main__diff-img-3 main__diff--images--general' />
                    <div className='main__diff-img-4 main__diff--images--general' />
                    <div className='main__diff-img-5 main__diff--images--general' />
                </div>
            </div>
        </div>
    )
}

export default MainDifferent