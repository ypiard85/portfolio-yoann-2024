'use client'

import React, { ReactNode, createContext, useContext } from "react";
import fr from '../lib/languages/fr'
import en from '../lib/languages/en'
import kr from '../lib/languages/kr'
import TranslateLoading from "../components/loading/TranslateLoading";


interface TranslateType {
    dictionary: any,
    isTranslateBusy: boolean,
    currentLanguage: string,
    updateCurrentLanguage: (lang:string) => void
}

const TranslateContext = createContext<TranslateType>({
    dictionary: fr,
    currentLanguage: 'fr',
    updateCurrentLanguage: () => {},
    isTranslateBusy: false,
});

export const TranslateProvider = ({ children }: { children: ReactNode }) => {

    const [currentLanguage, setCurrentLanguage] = React.useState<string>(localStorage.getItem('lang') || 'fr')
    const [dictionary, setDictionary] = React.useState<any>(fr)
    const [isTranslateBusy, setisTranslateBusy] = React.useState<boolean>(false)


    React.useEffect(() => {
        if(currentLanguage == 'fr'){
            setDictionary(fr)
            localStorage.setItem('lang', 'fr')
        }else if(currentLanguage == 'en'){
            setDictionary(en)
            localStorage.setItem('lang', 'en')
        }else if(currentLanguage == 'kr'){
            setDictionary(kr)
            localStorage.setItem('lang', 'kr')
        }else if(!currentLanguage){
            setDictionary(fr)
            localStorage.setItem('lang', 'fr')
        }
    }, [currentLanguage] )



    const updateCurrentLanguage = (lang : string) => {
        setCurrentLanguage(lang)
    }

    return (
        <TranslateContext.Provider value={{ dictionary, isTranslateBusy, currentLanguage, updateCurrentLanguage}}>
            {isTranslateBusy ? <TranslateLoading /> : children}
        </TranslateContext.Provider>
    );
};


export const useTranslateContext = () => useContext(TranslateContext);