
import '../../style/main/main-categories.scss'
import { useTranslation } from 'react-i18next';
import '../../style/main-tp/main-tp.scss'
import { useInView } from 'react-intersection-observer';

const MainCategories = () => {

    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
    });

    const [refImage, inViewImage] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
    });
    return (
        <div className='container__wraper' ref={ref}>
            <div className={`main__categories`} id='MainCategories'>
                <div className="main__categories--body">
                    <div className="main__categories--body-1">
                        <h4 className={`main--uptitle ${inView ? 'slide__title' : ''}`}>
                            {t("main.t7")}
                            </h4>
                        <div className='main__categories-title' >
                            <h3 className={`title main__categories-title-text main__categories-title-text-1 ${inView ? 'animation__title--general animation__title' : ''}`}>
                                {t("main.t8")}
                            </h3>
                            <h3 className={`title main__categories-title-text main__categories-title-text-2 ${inView ? 'animation__title--general animation__title' : ''}`}>
                                {t("main.t9")}
                            </h3>
                        </div>
                        <div className={`main__categories--general main__categories-1 show__image--general ${ inViewImage ?  'show__image ': ''}`} />
                        <div ref={refImage}  className={`main__categories--general main__categories-2 show__image--general ${ inViewImage ?  'show__image ': ''}`} />
                        <div className={`main__categories--general main__categories-3 show__image--general ${ inViewImage ?  'show__image ': ''}`} />
                        <div className={`main__categories--general main__categories-4 show__image--general ${ inViewImage ?  'show__image ': ''}`} />
                        <div className={`main__categories--general main__categories-5 show__image--general ${ inViewImage ?  'show__image ': ''}`}/>
                        <p className='main__categories-parag'>
                            {t("main.t10")}
                        </p>
                    </div>
                    <div className="main__categories--body-2"></div>
                </div>
            </div>
        </div>
    )
}

export default MainCategories