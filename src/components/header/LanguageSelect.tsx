import React, { useState,useRef,useEffect } from 'react'
import { LanguageType } from '../../types/types'
import { LANGUAGES as list } from '../../utils/const'
import { useTranslation } from 'react-i18next';

const LanguageSelect = ({setLanguage}:{setLanguage:(s:LanguageType) => void}) => {

    const [open, setOpen] = useState(false)
    const [lang, setLang] = useState<LanguageType[]>(list)
    const { i18n } = useTranslation();


    const chageLang = (elem: LanguageType) => {
        setLanguage(elem)
        setLang(
            s => ([elem, ...s.filter(it => elem !== it)])
        )
        setOpen(false)
        i18n.changeLanguage(elem);
    }

    const languageSelectRef = useRef<HTMLDivElement | null>(null); // Указываем тип для languageSelectRef

 
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageSelectRef.current && !languageSelectRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header__select' id="LanguageSelect" ref={languageSelectRef}>
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