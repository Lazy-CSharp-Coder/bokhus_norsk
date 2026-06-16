// "use client";

// import { useLanguageChosenGlobal } from "@/globalStates";
// import { LanguageText } from "@/types/languagetypes";
// import Image from "next/image";
// const selectedLanguage : number = 0;
// export interface LanguageListItemProps
// {
//     languageText : LanguageText,
//     handleClick: ()=> void
// }

// export function LanguageListItem({languageText,handleClick} :LanguageListItemProps)
// {
//     const { iconUrl, language} = languageText;
//     const {languageNumber, setLanguageNumber} = useLanguageChosenGlobal();

//     return(
//          <li className="flagListItem" onClick={handleClick}>
//                                 <Image className="flagImage" src={iconUrl} alt={`${language} icon`} fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager"/></li>
//     )
// }