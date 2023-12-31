import '../../style/main/main-different.scss'
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
const MainDifferent = () => {

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
        <div ref={ref} className={`main__diff show__block--general ${ inView ? 'show__block' : ''}`} id='MainDifferent'>
            <div className='container__wraper'>
                <div className="main__finds--body">
                    <div className="main__finds--body-1">
                    <h4 className={`main--uptitle ${inView ? 'slide__title' : ''}`}>
                            {t('main.t15')}</h4>
                        <div className='main__categories-title' >
                            <h3 className={`title main__categories-title-text main__categories-title-text-1 ${inView ? 'animation__title--general animation__title' : ''}`}>

                                {t('main.t16')}
                            </h3>
                            <h3 className={`title main__categories-title-text main__categories-title-text-2 ${inView ? 'animation__title--general animation__title' : ''}`}>
                                {t('main.t17')}
                            </h3>
                        </div>
                        <p  ref={refParag} className={`main__categories-parag ${ inViewParag ? "anim__parag" : ""}`}>
                            {t('main.t18')}
                        </p>
                        <div className='main__diff-img'>
                            <div className={`main__diff-img-6  main__finds--images--general ${ inViewImage ? 'transforToZero-6': ''}`}  />
                            <div className={`main__diff-img-7  main__finds--images--general ${ inViewImage ? 'transforToZero-7': ''}`}  />
                        </div>
                        <div className="main__finds--body-2"></div>
                    </div>
                </div>
            </div>
            <div className='main__diff--fixed'>
                <div className='main__diff--fixed-body'>
                    <div ref={refImage} className={`main__diff-img-1 main__diff--images--general ${ inViewImage ? 'transforToZero-1': ''}`} />
                    <div className={`main__diff-img-2 main__diff--images--general ${ inViewImage ? 'transforToZero-2': ''}`}  />
                    <div className={`main__diff-img-3 main__diff--images--general ${ inViewImage ? 'transforToZero-3': ''}`}   />
                    <div className={`main__diff-img-4 main__diff--images--general ${ inViewImage ? 'transforToZero-4': ''}`}  />
                    <div className={`main__diff-img-5 main__diff--images--general ${ inViewImage ? 'transforToZero-5': ''}`}  />
                </div>
            </div>
        </div>
    )
}

export default MainDifferent