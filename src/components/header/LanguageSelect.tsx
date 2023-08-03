import React, { useState } from 'react'
import { LanguageType } from '../../types/types'
import { LANGUAGES as list } from '../../utils/const'

const lang = ['en', 'ua', 'ru']

const LanguageSelect = () => {

    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState<LanguageType[]>(list)

    const chageLang = (elem: LanguageType) => {
        setLang(
            s => ([elem, ...s.filter(it => elem !== it)])
        )
        setOpen(false)
    }


    return (
        <div className='header__select'>
            <button className='header__select-lang' onClick={() => setOpen(true)}>{lang[0]}</button>
            {
                open
                    ? <ul className='header__select-list'>
                        {
                            lang.map(l =>
                                <li className='header__select-list-item' onClick={() => chageLang(l)}>
                                    {l}
                                </li>
                            )
                        }
                    </ul>
                    : <></>
            }
        </div>
    )
}

export default LanguageSelect