"use client";

import { createContext, type PropsWithChildren, useContext, useState } from "react";
import type {DescriptionShowing } from "./types/booktypes";
import { LanguageChosen, LanguageText } from "./types/languagetypes";
import languageTextFromJson from "@/json/languages.json";


const languagesAvailable : LanguageText[] = languageTextFromJson;
const startup : LanguageText = languagesAvailable[0];


const startupLanguage: LanguageChosen =
{
    languageNumber: 0,
    language : "english",
    sanityTag: "ENG",

    menuItemsHeader : startup.menuItemsHeader,
    heroPage : startup.heroPage,
  
}

// state provider 
const DescriptionShowingContext = createContext<DescriptionShowing>({ isDescriptionShowing: true, setIsDescriptionShowing : (value: boolean) => {}});

const LanguageContext = createContext<LanguageChosen>(startupLanguage);
// hook to handle the Intro to series

export function useDescriptionShowingState()
{
    const context = useContext(DescriptionShowingContext);
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

    const [isDescriptionShowing, setIsDescriptionShowing] = useState<boolean>(true);


    
    const { languageNumber, heroPage,  menuItemsHeader, language, sanityTag} = startupLanguage;



    return <DescriptionShowingContext.Provider value={{  isDescriptionShowing, setIsDescriptionShowing }}>
        <LanguageContext.Provider value={{ languageNumber, heroPage, menuItemsHeader, language, sanityTag }}>
            {children}
        </LanguageContext.Provider>
    </DescriptionShowingContext.Provider>;
}

