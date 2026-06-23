import Image from "next/image";
import Link from "next/link";
import type { HeaderProps } from "@/types/types";
import { HamburgerMenu } from "./HamburgerMenu";
import languagesJson from "@/json/languages.json";
import { LanguageText } from "@/types/languagetypes";
import { BokHus } from "@/app/BoKHus";
import { BokHusCom } from "./BokHusCom";

export function Header({ background, menuItems }: HeaderProps)
{
    const languageArray: LanguageText[] = languagesJson;

    const { menuItemsHeader } = languageArray[0];

    return (

        <header className="flex" style={{ background: background ? background : "", animationDuration: "0.2s" }}>

            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">
                <div className="headerIcon fadeInAnim">
                    <Image src="/icons/logotest.png" alt="bokhus header icon" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>
                <span className="mobileMode">  <HamburgerMenu menuItems={menuItems} /></span>
                <div className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItemsHeader.map((item, index) =>

                        <Link key={item.name + index} className="headerMenuItem" href={item.pageLink}>{item.name}</Link>)
                    }
                </div>
            </div>

        </header>
    );

}
