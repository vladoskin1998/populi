import { useEffect } from 'react'
import "../../style/main/points.scss"

const Points = () => {

    useEffect(() => {
        const points1 = document.querySelectorAll('.points_point--group1');
        const points2 = document.querySelectorAll('.points_point--group2');

        console.log("points1", points1);


        setTimeout(() => {
            points1.forEach(
                e => e?.classList.add('circle__point1__animation')
            )
            // points1?.classList.add('circle__point1__animation');

            points2.forEach(
                e => e?.classList.add('circle__point2__animation')
            )
            //  points2?.classList.add('circle__point2__animation');
        }, 4000);
    }, []);

    return (
        <div className='poitns'>
            <div className='points_point-1 points_point-xy1 points_point--generall points_point--group1' />
            <div className='points_point-2 points_point-xy2 points_point--generall  points_point--group1' />
            <div className='points_point-3 points_point-xy3 points_point--generall  points_point--group1' />
            <div className='points_point-4 points_point-xy4 points_point--generall  points_point--group1' />


            <div className='points_point-1 points_point-xy5 points_point--generall  points_point--group2' />
            <div className='points_point-2 points_point-xy6 points_point--generall  points_point--group2' />
            <div className='points_point-3 points_point-xy7 points_point--generall  points_point--group2' />
            <div className='points_point-4 points_point-xy8 points_point--generall  points_point--group2' />

        </div>
    )
}

export default Points