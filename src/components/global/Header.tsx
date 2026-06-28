import Image from "next/image";
import Link from "next/link";
import type { HeaderProps } from "@/types/types";
import { HamburgerMenu } from "./HamburgerMenu";
import languagesJson from "@/json/languages.json";
import { LanguageText } from "@/types/languagetypes";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ProfileButton } from "./ProfileButton";

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
            <div className="clerkButtons">

                <Show when="signed-out">
                    <SignInButton>
                        <button className="signInButton">Sign In </button>
                    </SignInButton>
                    <SignUpButton>
                        <button className="signUpButton">
                            
                            <span className="signUpFront">Sign Up</span></button>
                    </SignUpButton>
                </Show>
                <Show when="signed-in">
                    <div className="userButtonDiv">
                   
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: "2.7rem", height: "2.7rem",
                                    border: "3px solid var(--bokhusRootsColor)",
                                    padding: "8px",       
                                    backgroundColor: "transparent", /* Optional background color inside the border */
                                    borderRadius: "50%"
                                }
                            }
                        }}
                    />     
                    <ProfileButton/>

                    </div>

                </Show>

            </div>
        </header>
    );

}
