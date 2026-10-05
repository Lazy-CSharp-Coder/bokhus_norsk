"use client";

import { useState } from "react";
import styles from "./NoBooksYet.module.css";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";


export function NoBooksDescription({ isLoggedIn }: { isLoggedIn: boolean; })
{
    const [showARCInfo, setShowARCInfo] = useState<boolean>(false);

    return (
        <div className={styles.noBooksDescription}>
            {!showARCInfo ?
                <div className={styles.newLetterArcWrapper}>
                    <div className={`${styles.newsLetterDiv} fadeInFromBelowAnim`}>
                        {isLoggedIn ?
                            <div className={styles.newsLetterLogDiv}>
                                <p>Books by this author are coming soon. Subscribe to our newsletter to stay updated on upcoming books and releases.</p>
                                <Link className={styles.newsLetterLink} href="/Register">Subscribe to our newsletter</Link>
                            </div> :
                            <div className={styles.newsLetterLogDiv}>
                                <p>Books by this author are coming soon. Register at BokHus and subscribe to our newsletter to stay updated on upcoming books and releases.</p>
                                <SignInButton fallbackRedirectUrl={"/Authors"}>
                                    <span className={styles.newsLetterLink}>Register and subscribe to our newsletter</span>
                                </SignInButton>
                            </div>
                        }

                        <p>You can also sign up as an ARC reader on the same page for a chance to read books before they`re published.

                        </p>
                        <button onClick={() => setShowARCInfo(true)}>Don't now what an ARC reader is ? Click to find out.</button>
                    </div>
                </div> :




                <div className={`${styles.newsLetterDiv} fadeInFromBelowAnim`}>
                    <h4 className={styles.whatIsARCHeading}>What is an ARC reader ?</h4>
                    <p>

                        ARC stands for Advance Reader Copy, an early copy of a book made available before its official release.

                    </p>

                    <p>
                        As an ARC reader, you may receive a book before publication and share your honest opinion, for example through a book review. Early copies may still contain minor errors or undergo final edits before publication.

                    </p>

                    <p>   You don't need to be a professional reviewer. What matters is your own reading experience and honest feedback.</p>


                    <p>   Interested ?
                        {isLoggedIn ?
                            <Link className={styles.newsLetterLink} href="/Register"> Sign up as as ARC reader at Bokhus</Link> :

                            <SignInButton fallbackRedirectUrl={"/Authors"}>
                                <span className={styles.newsLetterLink}>Register and sign up as an ARC reader at BokHus.</span>
                            </SignInButton>
                        }
                    </p>
                    <button onClick={()=> setShowARCInfo(false)}>Back</button>
                </div>}
        </div>




    );
};;