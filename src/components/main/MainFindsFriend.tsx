
import '../../style/main/main-finds.scss'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const MainFindsFriend = () => {

    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
    });
    const [refImage, inViewImage] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
    });
    const [refParag, inViewParag] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
    });
    return (

        <div className={`main__finds ${inView ? 'show__block' : ''}`} id='MainFindsFriend' ref={ref}>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
                        <h4 className={`main--uptitle ${inView ? 'slide__title' : ''}`}>
                            {t('main.t11')}
                        </h4>
                        <div className='main__categories-title' >
                            <h3 className={`title main__categories-title-text main__categories-title-text-1 ${inView ? 'animation__title--general animation__title' : ''}`}>
                                {t('main.t12')}
                            </h3>
                            <h3 className={`title main__categories-title-text main__categories-title-text-2 ${inView ? 'animation__title--general animation__title' : ''}`}>
                                {t('main.t13')}
                            </h3>
                        </div>
                        <p  ref={refParag} className={`main__categories-parag ${ inViewParag ? "anim__parag" : ""}`}>
                            {t('main.t14')}
                        </p>
                        <div className={`main__finds--images-1 main__finds--images--general ${inViewImage ? 'rotateToZero-1' : ''}`}  />
                        <div className={`main__finds--images-2 main__finds--images--general ${inViewImage ? 'rotateToZero-2' : ''}`}  />
                        <div className={`main__finds--images-3 main__finds--images--general ${inViewImage ? 'rotateToZero-3' : ''}`}  />
                    </div>
                    <div className="main__finds--body-2"></div>
                </div>
            </div>

            <div className='main__finds--fixed'>
                <div className='main__finds--fixed-body' >
                    <div ref={refImage}  className={`main__finds--images-4 main__finds--images--general ${inViewImage ? 'rotateToZero-4' : ''}`} />
                    <div className={`main__finds--images-5 main__finds--images--general ${inViewImage ? 'rotateToZero-5' : ''}`}/>
                    <div className={`main__finds--images-6 main__finds--images--general ${inViewImage ? 'rotateToZero-6' : ''}`}/>
                    <div className={`main__finds--images-7 main__finds--images--general ${inViewImage ? 'rotateToZero-7' : ''}`}/>
                    <div className={`main__finds--images-8 main__finds--images--general ${inViewImage ? 'rotateToZero-8' : ''}`} />
                </div>
            </div>
        </div>
    )
}

export default MainFindsFriend