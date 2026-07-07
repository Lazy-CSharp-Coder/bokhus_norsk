import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import languagesJson from "@/json/languages.json";
import { LanguageText } from "@/types/languagetypes";
import { LoginClerk } from "./LoginClerk";
import "./Header.module.css";

export function Header()
{
    const languageArray: LanguageText[] = languagesJson;

    const { menuItemsHeader } = languageArray[0];

    return (

        <header className="headerBokHus fadeInAnim" style={{ animationDuration: "0.2s" }}>
  <div className="headerIcon fadeInAnim">
              
                    <Image src="/icons/logotest.png" alt="bokhus header icon" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager"/>
                </div>
            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">
              
                <span className="mobileMode">  <HamburgerMenu menuItems={menuItemsHeader} /></span>
                <div className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItemsHeader.map((item, index) =>

                        <Link key={item.name + index} className="headerMenuItem" href={item.pageLink}>{item.name}</Link>)
                    }
                </div>
            </div>
          <LoginClerk />
        </header>
    );

}
