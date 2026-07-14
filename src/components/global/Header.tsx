import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import languagesJson from "@/json/languages.json";
import { LanguageText } from "@/types/languagetypes";
import { LoginClerk } from "./LoginClerk";
import "./Header.module.css";
import { RiHome4Line } from "react-icons/ri";  // HOME
import { BsPersonFill } from "react-icons/bs";  // AUTHORS
import { TbBooks } from "react-icons/tb";  // SERIES
import type { ReactIcons } from "@/types/types";
import { TfiWrite } from "react-icons/tfi";
import { FaShop } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa6";
import { HeaderMenuItem } from "./HeaderMenuLitem";


const reactIconsArray: ReactIcons[] =
    [
        {
            name: "HOME",
            icon: RiHome4Line,
            size: "2rem"

        },

        {
            name: "AUTHORS",
            icon: BsPersonFill,
            size: "2rem"
        },

        {
            name: "SERIES",
            icon: TbBooks,
            size: "2rem"
        },

        {
            name: "REGISTER",
            icon: TfiWrite,
            size: "1.8rem"
        },
        {
            name: "WHERE TO BUY",
            icon: FaShop,
            size: "2rem"
        },
        {
            name: "WORK WITH US",
            icon: RiContactsBookLine,
            size: "2rem"
        },
        {
            name: "CONTACT",
            icon: FaUserCheck,
            size: "2rem"
        },

    ];


export interface HeaderMenuItem
{
    name: string,
    pageLink: string,
    iconNumber: number;
}


export function Header()
{
    const languageArray: LanguageText[] = languagesJson;

    const { menuItemsHeader } = languageArray[0];

    return (

        <header className="headerBokHus fadeInAnim" style={{ animationDuration: "0.2s" }}>

            <Link href={"/"} className="headerIcon fadeInAnim">

                <Image src="/icons/logotest.png" alt="bokhus header icon" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
            </Link>
            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">


                <div className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItemsHeader.map((item, index) =>
                        <HeaderMenuItem IconToUse={reactIconsArray[index].icon} size={reactIconsArray[index].size} pageLink={item.pageLink}/>)
                    }
                </div>
            </div>
            <div className="loginBurgerWrapper">
                <LoginClerk />
                <span className="mobileMode">  <HamburgerMenu menuItems={menuItemsHeader} /></span>

            </div>

        </header>
    );

}
