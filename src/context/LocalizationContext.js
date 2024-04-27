import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext()

export const LocalizationProvider = ({children})=>{
    const [locale,setLocale] = useState('en');

    const localizationInitialValue = {
        en:{
            greeting:'Hello world',
            welcome:'Welcome to the App',
        },
        es:{
            greeting:'Hola Mundo',
            welcome:'Bienvenida a la aplicación',
        }
    }

    const translate = (key)=>{
        return localizationInitialValue[locale][key]
    }

    return (
        <LocalizationContext.Provider value={{locale,setLocale,translate}}>
            {children}
        </LocalizationContext.Provider>
    )
}

export const useLocalization = () =>{
    return useContext(LocalizationContext)
}