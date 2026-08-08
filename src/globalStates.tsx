"use client";

import { createContext, type PropsWithChildren, useContext, useState } from "react";
import type { DescriptionShowing } from "./types/booktypes";

// state provider 
const DescriptionShowingContext = createContext<DescriptionShowing>({ isDescriptionShowing: true, setIsDescriptionShowing: (value: boolean) => { } });


// hook to handle the Intro to series

export function useDescriptionShowingState()
{
    const context = useContext(DescriptionShowingContext);
    if (context == undefined)
        throw new Error("useIntroState must be used inside a StateProvider");
    return context;
}


export function StateProvider({ children }: PropsWithChildren)
{

    const [isDescriptionShowing, setIsDescriptionShowing] = useState<boolean>(true);

    return <DescriptionShowingContext.Provider value={{ isDescriptionShowing, setIsDescriptionShowing }}>

        {children}

    </DescriptionShowingContext.Provider>;
}

