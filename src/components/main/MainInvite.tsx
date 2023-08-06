import { useEffect } from 'react'

const MainInvite = ({ isAnimation }: { isAnimation: boolean }) => {

    useEffect(() => {
        const main__invitetitle = document.querySelectorAll('.main__invite-title');
        if (isAnimation) {
            setTimeout(() => {
                main__invitetitle.forEach((element) => {
                    element?.classList.add('title--animation');
                })
            }, 4000);
        }
        else {
            main__invitetitle.forEach((element) => {
                element?.classList.add('title--animation');
            })
        }

    }, [])


    return (
        <div className='main__invite'>
            <h4 className='main--uptitle' >
                Best moments and highlights
            </h4>
            <p className='main__invite-title' style={{ fontSize: "70px" }}>
                Invite, meet, find
            </p>
            <h2 className='main__invite-title' style={{ fontSize: "80px" }}>
                create
            </h2>
            <h2 className='main__invite-title' style={{ fontSize: "90px" }}>
                events!
            </h2>
            <button className='main__invite-button button__grad'>I want to know!</button>
            <p className='main__invite-parag'>Meet new people, share experiences, photos, and videos. Play games, enjoy conversations, volunteer, travel, or just spend time outdoors. Even from a distance! Get closer to each other with Populi.</p>
        </div>
    )
}

export default MainInvite