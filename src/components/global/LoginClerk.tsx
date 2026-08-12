"use client";
import { Suspense } from "react";
import { Show, SignInButton, useClerk, UserButton } from "@clerk/nextjs";
// import { usePathname,  useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import styles from "./LoginClerk.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";
import { useAuth } from '@clerk/nextjs'

function LoginClerkContent()
{
    // const pathname = usePathname();
    // const searchParams = useSearchParams();

    // const path = `${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`;
    // const { signOut } = useClerk();
     const { userId } = useAuth();
     

    const isAdmin = userId == process.env.NEXT_PUBLIC_MHUSER_ID ? true : false;
    return (

        <div className={styles.clerkButtons}>

            <Show when="signed-out">
                <SignInButton fallbackRedirectUrl={"/Register"}>
                    <button className={styles.signInButton}>SIGN IN <span className={styles.signInRegisterSpan}> / </span> REGISTER</button>
                </SignInButton>
                {/* <SignUpButton mode="modal" fallbackRedirectUrl="/Register">
                    <button className="signUpButton">
                        Sign Up</button>
                </SignUpButton> */}
            </Show>
            <Show when="signed-in">
                <div className={styles.userButtonDiv}>

                    <UserButton
                        appearance={{
                            elements: {

                                // userButtonPopoverActionButton__signOut: {
                                //     display: "none",                           },
                                    
                                userButtonAvatarBox: {
                                    width: "2.6rem", height: "2.6rem",
                                    // border: "1px solid var(--bokhusRootsColor)",
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
                            <UserButton.Link label="Newsletter subscribers" href="/Admin"  labelIcon={<span className={styles.clerkButtonSpan}><GiNewspaper size="1rem"/> </span> }/>
                            
                        }
                        </UserButton.MenuItems>
                    </UserButton>

                    <Link className={styles.signInButton} href="/Register">PROFILE</Link>
                </div>

            </Show>
        </div>);

};

export function LoginClerk()
{
    return (
        <Suspense fallback={<div className={styles.clerkButtons}><button className={styles.signInButton}>SIGN IN</button></div>}>
            <LoginClerkContent />
        </Suspense>
    );
}