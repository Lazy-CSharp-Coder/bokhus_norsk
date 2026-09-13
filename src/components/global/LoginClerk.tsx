"use client";
import { Suspense } from "react";
import { Show, SignInButton, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styles from "./LoginClerk.module.css";
import { AccountMenu } from "./AccountMenu";

export function LoginClerkContent()
{
    // const pathname = usePathname();
    // const searchParams = useSearchParams();

    // const path = `${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`;
    // const { signOut } = useClerk();

     

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
               <AccountMenu/>
               
               </Show>

                    <Link className={styles.signInButton} href="/Register">PROFILE</Link>
           

        
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