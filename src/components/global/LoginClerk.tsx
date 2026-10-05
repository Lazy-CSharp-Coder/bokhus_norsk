"use client";
import { Suspense } from "react";
import { Show, SignInButton, useClerk, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styles from "./LoginClerk.module.css";
import { AccountMenu } from "./AccountMenu";

export function LoginClerkContent()
{


    return (

        <div className={styles.clerkButtons}>

            <Show when="signed-out">

                <SignInButton forceRedirectUrl= "/Register">
                    <button className={styles.signInButton}>SIGN IN <span className={styles.signInRegisterSpan}> / </span> REGISTER</button>
                </SignInButton>

            </Show>

            <Show when="signed-in">
                <AccountMenu />
                <Link className={styles.signInButton} href="/Register">REGISTER/EDIT PROFILE</Link>
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