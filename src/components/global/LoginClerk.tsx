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

                <SignInButton >
                    <button className={styles.signInButton}>LOGG INN<span className={styles.signInRegisterSpan}> / </span> REGISTER</button>
                </SignInButton>

            </Show>

            <Show when="signed-in">
                <AccountMenu />
                <Link className={styles.editButton} href="/Register">REDIGER PROFIL</Link>
            </Show>

        </div>);

};

export function LoginClerk()
{
    return (
        <Suspense fallback={<div className={styles.clerkButtons}><button className={styles.signInButton}>LOGG INN</button></div>}>
            <LoginClerkContent />
        </Suspense>
    );
}