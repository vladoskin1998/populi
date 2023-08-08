import { useEffect, useState } from "react"
import '../../style/main/main-categories.scss'
import MainTitle from './MainTitle';
import { useTranslation } from 'react-i18next';

const MainCategories = () => {

    const { t } = useTranslation();

    return (
        <div className='container__wraper'>
            <div className='main__categories' id='MainCategories'>
                <div className="main__categories--body">
                    <div className="main__categories--body-1">
                        <h4 className='main--uptitle'>{t("main.t7")}</h4>
                        <div className='main__categories-title'>
                            <h3 className='title main__categories-title-text' style={{ fontSize: "40px" }}>
                           
                                    {t("main.t8")}
                          
                            </h3>
                            <h3 className='title main__categories-title-text' style={{ fontSize: "50px" }}>
                           
                                    {t("main.t9")}
                          
                            </h3>
                        </div>
                        <div className='main__categories--general main__categories-1' />
                        <div className='main__categories--general main__categories-2' />
                        <div className='main__categories--general main__categories-3' />
                        <div className='main__categories--general main__categories-4' />
                        <div className='main__categories--general main__categories-5' />
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