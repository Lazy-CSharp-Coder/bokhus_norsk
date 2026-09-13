"use client";
import { UserButton,useUser } from "@clerk/nextjs";
import styles from "./AccountMenu.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";

export function AccountMenu()
{
    const { user, isLoaded} = useUser();

    if(!isLoaded) return null;

    const isAdmin = user?.publicMetadata?.role === "admin";

    return(

<div className={styles.userButtonDiv}>

    <UserButton
        appearance={{
            elements: {

       
                userButtonAvatarBox: {
                    width: "2.6rem", height: "2.6rem",
   
                    padding: "0rem",
                    backgroundColor: "transparent", /* Optional background color inside the border */
                    borderRadius: "50%"
                }
            }
        }} ><UserButton.MenuItems>
            <UserButton.Link label={"Your profile at BokHus"}
                labelIcon={<span className={styles.clerkButtonSpan}><FaUserLarge size="1rem" /></span>} href="/Register" />

            <UserButton.Link label="Delete profile"
                labelIcon={<span className={styles.clerkButtonSpan}><RiDeleteBin6Line size="1rem" className={styles.deleteProfileIcon} />

                </span>} href="/DeleteProfile" />
            {isAdmin &&
                <UserButton.Link label="Newsletter subscribers" href="/Admin" labelIcon={<span className={styles.clerkButtonSpan}><GiNewspaper size="1rem" /> </span>} />

            }
        </UserButton.MenuItems>
    </UserButton>
    </div>);

    }