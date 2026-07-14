import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginClerk } from "./LoginClerk";
import { HeaderMenuItem } from "./HeaderMenuItem";

import { RiHome4Line } from "react-icons/ri";  // HOME
import { BsPersonFill } from "react-icons/bs";  // AUTHORS
import { TbBooks } from "react-icons/tb";  // SERIES
import { TfiWrite } from "react-icons/tfi";
import { FaShop } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { VscInfo } from "react-icons/vsc";
import type { HeaderMenuItemProps } from "@/types/types";

import "./Header.module.css";

const menuItems: HeaderMenuItemProps[] =
    [
        {
            name: "HOME",
            icon: RiHome4Line,
            size: "1.5rem",
            pageLink : "/"

        },

        {
            name: "AUTHORS",
            icon: BsPersonFill,
            size: "1.5rem",
                pageLink : "/Authors"
        },

        {
            name: "SERIES",
            icon: TbBooks,
            size: "1.5rem",
                pageLink : "/Series"
        },

        {
            name: "REGISTER",
            icon: TfiWrite,
            size: "1.2rem",
                pageLink : "/Register"
        },
        {
            name: "WHERE TO BUY",
            icon: FaShop,
            size: "1.5rem",
                pageLink : "/WhereToBuy"
        },
        {
            name: "WORK WITH US",
            icon: RiContactsBookLine,
            size: "1.5rem",
                pageLink : "/WorkWithUs"
        },
        {
            name: "CONTACT",
            icon: IoMailOutline,
            size: "1.5rem",
                pageLink : "/Contact"
        },
        {
            name: "ABOUT",
            icon: VscInfo,
            size: "1.5rem",    pageLink : "/About"
        },


    ];



export  function Header()
{
    return (

        <header className="headerBokHus fadeInAnim" style={{ animationDuration: "0.2s" }}>

            <Link href={"/"} className="headerIcon fadeInAnim">

                <Image src="/icons/logotest.png" alt="bokhus header icon" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
            </Link>
            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">


                <div className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItems.map((item, index) =>
                        <HeaderMenuItem key={index + "#HeaderMenuItemDesktop#"} {...item}/>)
                    }
                </div>
            </div>
            <div className="loginBurgerWrapper">
                <LoginClerk />
                <span className="mobileMode">  <HamburgerMenu menuItems={menuItems} /></span>

            </div>

        </header>
    );

}
