import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { LoginClerk } from "./LoginClerk";
import { menuItems } from "./HeaderMenuItemsDef";
import { HeaderMenuItem } from "./HeaderMenuItem";
import styles from  "./Header.module.css";



export  function Header()
{
   
    return (

        <header className={`${styles.headerBokhus} fadeInAnim`} style={{ animationDuration: "0.2s" }} >

            <Link href={"/"} className="fadeInAnim">

                <Image src="/icons/logo.png" alt="bokhus header icon" width={128} height={128} loading="eager" className={styles.logoHeader} />
            </Link>
            <div key={"#headermenuitems#"} className={styles.logoMenuWrapper}>


                <nav className={`${styles.menuItemsContainer} ${styles.desktopMode} fadeInAnim`} style={{ animationDuration: "1s", animationDelay: "0.3s" }}>
                    {menuItems.map((_, index) =>
                        <HeaderMenuItem key={index + "#HeaderMenuItemDesktop#"} index={index} className={styles.headerMenuItem} iconClassName={styles.headerIcon}/>)
                    }
                </nav>
            </div>
            <div className={styles.loginBurgerWrapper}>
                <LoginClerk />
                <span className={styles.mobileMode}>  <HamburgerMenu /></span>

            </div>

        </header>
    );

}


// attributions 
/*
<a href="https://www.flaticon.com/free-icons/norway" title="norway icons">Norway icons created by Magnific - Flaticon</a> 
<a href="https://www.flaticon.com/free-icons/flag" title="flag icons">Flag icons created by Magnific - Flaticon</a>
*/