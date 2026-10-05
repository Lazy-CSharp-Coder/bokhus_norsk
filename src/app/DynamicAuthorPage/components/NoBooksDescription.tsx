"use client";

import { useState } from "react";
import styles from "./NoBooksYet.module.css";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { ImBooks } from "react-icons/im";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiTimeLine } from "react-icons/ri";
export function NoBooksDescription({ isLoggedIn }: { isLoggedIn: boolean; })
{
    const [showARCInfo, setShowARCInfo] = useState<boolean>(false);

    return (
        <div className={styles.noBooksDescription} style={{ width: showARCInfo ? "80%" : "60%" }}>
            {!showARCInfo ?

                <div key={"news" + showARCInfo} className={`${styles.newsLetterDiv} fadeInFromBelowAnim`}>

                    <div className={styles.headingIconWrapper}>
                        <ImBooks size="3rem" />
                        <h3 className={styles.noBooksHeading}>Books coming soon !</h3>
                        <RiTimeLine size="2.5rem"/>
                    </div>
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

                    </p><span>Don't now what an ARC reader is ?   <button className={styles.newsLetterLink} onClick={() => setShowARCInfo(true)}> Click here to find out more</button> </span>



                </div> :





                <div key={"arc" + showARCInfo} className={`${styles.newsLetterDiv} fadeInFromBelowAnim`}>
                    <div className={styles.headingIconWrapper}>
                        <FaBookOpenReader size="3rem" />
                        <h3 className={styles.noBooksHeading}>What is an ARC reader ?</h3>

  <button className={styles.backButton} onClick={() => setShowARCInfo(false)}>{`<< Go Back <<`}</button>
                    </div>
                    <p>

                        ARC stands for Advance Reader Copy, an early copy of a book made available before its official release.

                    </p>

                    <p>
                        As an ARC reader, you may receive a book before publication and share your honest opinion, for example through a book review. Early copies may still contain minor errors or undergo final edits before publication.

                    </p>

                    <p>   You don't need to be a professional reviewer. What matters is your own reading experience and honest feedback.</p>

                    <div className={styles.arcBackDiv}>

                        <p>  Interested ?  </p>
                        {isLoggedIn ?
                            <Link className={styles.newsLetterLink} href="/Register"> Sign up as as ARC reader at Bokhus</Link> :

                            <SignInButton fallbackRedirectUrl={"/Authors"}>
                                <span className={styles.newsLetterLink}> Register and sign up as an ARC reader at BokHus.</span>
                            </SignInButton>
                        }</div>


                  </div>}



        </div >



    );



}


