import React, { useEffect, useState } from 'react'
import '../../style/agreement.scss'
import { useTranslation } from 'react-i18next';
import { LanguageType } from '../../types/types';
import { DOMAIN } from '../../utils/const';

const Agreement = ({ language }: { language: LanguageType }) => {

    const { t } = useTranslation();
    const [rules, setRules] = useState('<></>')

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [])

    useEffect(() => {
        fetch(`${DOMAIN}/content/${language.toLowerCase()}`)
            .then(response => response.text())
            .then(data => {
                setRules(data);
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });
    }, [language]);


    return (
        <div className='agreement'>
            <div className='container__wraper'>
                <h3 className='title'>
                    {t('agreement.t1')}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: rules }} >

                </div>
            </div>
        </div>
    )
}

export default Agreement