import React, { useEffect } from 'react'
import '../../style/agreement.scss'
import { useTranslation } from 'react-i18next';



   


const Agreement = () => {

    const { t } = useTranslation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [])

    return (
        <div className='agreement'>
            <div className='container__wraper'>
                <h3 className='title'>
                    {t('agreement.t1')}
                </h3>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Agreement