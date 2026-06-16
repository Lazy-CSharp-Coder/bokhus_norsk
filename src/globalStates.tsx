"use client";

import { createContext, type PropsWithChildren, useContext, useState } from "react";
import type { IntroSeries, IntroPlayState } from "./types/booktypes";
import { LanguageChosen, LanguageText } from "./types/languagetypes";
import languageTextFromJson from "@/json/languages.json";
import { HeroPageText } from "@/types/languagetypes";

const languagesAvailable : LanguageText[] = languageTextFromJson;
const startup : LanguageText = languagesAvailable[0];


const startupLanguage: LanguageChosen =
{
    languageNumber: 0,
    language : "english",
    sanityTag: "ENG",
    setLanguageNumber : (value: number) => {},
    menuItemsHeader : startup.menuItemsHeader,
    heroPage : startup.heroPage,
    bookArticle : startup.bookArticle,

}

// state provider 
const IntroPlayed = createContext<IntroSeries>({ hasIntroBeenPlayed: "never", setIntroBeenPlayed: () => { }, isDescriptionShowing: false, setIsDescriptionShowing: () => { } });
const LanguageContext = createContext<LanguageChosen>(startupLanguage);
// hook to handle the Intro to series

export function useIntroState()
{
    const context = useContext(IntroPlayed);
    if (context == undefined)
        throw new Error("useIntroState must be used inside a StateProvider");
    return context;
}

export function useLanguageChosen()
{
    const context = useContext(LanguageContext);
    if (context == undefined)
        throw new Error("useIntroState must be used inside a StateProvider");
    return context;
}



export function StateProvider({ children }: PropsWithChildren)
{
    const [hasIntroBeenPlayed, setIntroBeenPlayed] = useState<IntroPlayState>("played");
    const [isDescriptionShowing, setIsDescriptionShowing] = useState<boolean>(true);
    const [languageChosen, setLanguageChosen] = useState<LanguageChosen>(startupLanguage);

    
    const { languageNumber, heroPage, bookArticle, menuItemsHeader, language, sanityTag} = languageChosen;

    const setLanguageNumber = (value: number) => 
    { 
        if(value > languagesAvailable.length-1) return;
        setLanguageChosen((prev) => ({...prev, heroPage:  languagesAvailable[value].heroPage , bookArticle : languagesAvailable[value].bookArticle, menuItemsHeader : languagesAvailable[value].menuItemsHeader, languageNumber : value, sanityTag: languagesAvailable[value].sanityTag, language : languagesAvailable[value].language })) 
    };


    return <IntroPlayed.Provider value={{ hasIntroBeenPlayed, setIntroBeenPlayed, isDescriptionShowing, setIsDescriptionShowing }}>
        <LanguageContext.Provider value={{ languageNumber, setLanguageNumber, heroPage, bookArticle, menuItemsHeader, language, sanityTag }}>
            {children}
        </LanguageContext.Provider>
    </IntroPlayed.Provider>;
}

