import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginClerk } from "./LoginClerk";
import { menuItems } from "./HeaderMenuItemsDef";
import { HeaderMenuItem } from "./HeaderMenuItem";
import "./Header.module.css";



export  function Header()
{
   
    return (

        <header className="headerBokHus fadeInAnim" style={{ animationDuration: "0.2s" }} >

            <Link href={"/"} className="fadeInAnim">

                <Image src="/icons/logo.png" alt="bokhus header icon" width={128} height={128} loading="eager" className="logoHeader" />
            </Link>
            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">


                <nav className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItems.map((_, index) =>
                        <HeaderMenuItem key={index + "#HeaderMenuItemDesktop#"} index={index} className="headerMenuItem" iconClassName="headerIcon"/>)
                    }
                </nav>
            </div>
            <div className="loginBurgerWrapper">
                <LoginClerk />
                <span className="mobileMode">  <HamburgerMenu /></span>

            </div>

        </header>
    );

}
