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

        <header className="headerBokHus fadeInAnim" style={{ animationDuration: "0.2s" }} ref={headerRef}>

            <Link href={"/"} className="headerIcon fadeInAnim">

                <Image src="/icons/logotest.png" alt="bokhus header icon" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
            </Link>
            <div key={"#headermenuitems#"} className="logoMenuWrapper flex">


                <div className="menuItemsContainer desktopMode fadeInAnim" style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItems.map((_, index) =>
                        <HeaderMenuItem key={index + "#HeaderMenuItemDesktop#"} index={index} className="headerMenuItem" iconClassName="headerIcon"/>)
                    }
                </div>
            </div>
            <div className="loginBurgerWrapper">
                <LoginClerk />
                <span className="mobileMode">  <HamburgerMenu /></span>

            </div>

        </header>
    );

}
