import { useEffect } from 'react'
import { PointsSvg1, PointsSvg2, PointsSvg3, PointsSvg4 } from '../../svg/PointsSvg'
const Points = ({ isAnimation }: { isAnimation: boolean }) => {


    useEffect(() => {
        const points1 = document.querySelectorAll('.circle__point1 > div');
        const points2 = document.querySelectorAll('.circle__point2 > div');

        console.log("points1", points1);
        
        if (isAnimation) {
            setTimeout(() => {
                points1.forEach(
                    e => e?.classList.add('circle__point1__animation')
                )
               // points1?.classList.add('circle__point1__animation');

               points2.forEach(
                e => e?.classList.add('circle__point2__animation')
            )
              //  points2?.classList.add('circle__point2__animation');
            }, 6000);

         
        }
    }, []);
    return (
        <div className='circle__point'>
            <div className='circle__poins-wrap'>
                <div className='circle__point2'>
                    <div />
                    <div />
                    <div />
                    <div />
                    {/* <PointsSvg1 />
                    <PointsSvg2 />
                    <PointsSvg3 />
                    <PointsSvg4 /> */}
                </div>
                <div className='circle__point1'>
                    <div />
                    <div />
                    <div />
                    <div />
                    {/* <PointsSvg1 />
                    <PointsSvg2 />
                    <PointsSvg3 />
                    <PointsSvg4 /> */}
                </div>
            </div>
        </div>
    )
}

export default Points