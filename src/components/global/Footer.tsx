"use client";
import { AffiliateButton, CookieButton, PrivacyButton, TermsButton } from "./ButtonsFooter";

import Link from "next/link";
import Image from "next/image";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useOutsideClick } from "@/functions/useOutsideClick";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

import { IoDocumentTextOutline } from "react-icons/io5";

import { LogoBPWebDev } from "./LogoBPWebDev";

import styles from "./Footer.module.css";

export function Footer()
{
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const router = useRouter();
    const  mobileMenuRef= useRef<HTMLDivElement>(null);
    
    const handleOutsideClick = (e : MouseEvent) =>
    {
        let shallClose = false;
        if (mobileMenuRef.current && mobileMenuRef.current.contains(e.target as Node)) shallClose = false;
        else shallClose = true; 
        if(shallClose && isMobileMenuOpen) setMobileMenuOpen(false);
    };

    useOutsideClick(handleOutsideClick);

    return (
        <footer>
            <div className={styles.logoTermsWrapper}>
                <div className={styles.logoFooterWrapper}>
                    <Image className={styles.logoFooterImg} src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>
                <nav className={styles.termsGroup}>

                    <TermsButton />
                    <PrivacyButton />
                    <CookieButton />
                    <AffiliateButton />
                </nav>
            </div>

            <div className={`${styles.footerEndDiv} desktopModeFooter`}>
                <div className={styles.contactUsDiv}>   <Link className={styles.contactUsLink} href="/Contact"><IoMailOutline className={styles.mailIcon} size="2rem" aria-label="Contact us" />CONTACT</Link>
                 


                </div>
                <div className={styles.socialMediaDiv}>

                    <div className={styles.socialMediaGroup}>

                        <FaInstagram className={styles.instagramIcon} size={"1.8rem"} />
                        <FaFacebook className={styles.facebookIcon} size={"1.7rem"} /></div>
                    <span className={styles.logoText}>SOCIAL MEDIA BOKHUS </span>


                </div>
                <div className={styles.pageCreditsDiv}>

                    <Link className={styles.iconCreditDiv} href="/Credits">
                        {/* <IoIosInformationCircleOutline size="2.0rem" className="iconCreditIcon" /> */}
                        <IoDocumentTextOutline size="1.9rem" className={styles.iconCreditIcon}/>
                        <span className={styles.logoText}>CREDITS
                        </span>


                    </Link>


                    <div className={styles.logoBPDiv}>
                          <a href="https://bpwebdev.no" target="_blank">
                          <LogoBPWebDev /> 
                          </a>
                
                        <span className={styles.logoText}>WEBPAGE BY
                        </span>

                    </div>


                </div>

            </div>
            <div className={`${styles.arrowMenuWrapper} mobileModeFooter`}>


                <PiArrowFatLinesUpFill className={styles.mobileFooterEndIcon} size="2rem" onClick={() => setMobileMenuOpen((prev) => !prev)} />
                {isMobileMenuOpen &&
                    <div ref={mobileMenuRef} className={styles.footerEndMobileDiv} onClick={() => setMobileMenuOpen(false)}>

                        <Link className={styles.linkMobile} href="/Contact">
                            <IoMailOutline size="2rem" /> <span className={styles.logoTextMobile}>CONTACT</span></Link>


                        <Link className={styles.linkMobile} href="/">
                            <FaInstagram size="1.8rem" />
                            <span className={styles.logoTextMobile}>INSTAGRAM</span></Link>

                        <Link className={styles.linkMobile} href="/">
                            <FaFacebook className={styles.facebookIcon} size="1.7rem" />
                            <span className={styles.logoTextMobile}>FACEBOOK</span></Link>






                        <Link href="/Credits" className={styles.linkMobile}>
                            <IoDocumentTextOutline size="1.8rem" className={styles.iconCreditIcon}/>    
                            <span className={styles.logoTextMobile}>CREDITS</span>     </Link>




                        <Link href="https://bpwebdev.vercel.app" target="_blank" className={styles.linkMobile}>
                      <LogoBPWebDev />
                        <span className={styles.logoTextMobile}>WEBPAGE BY         </span>  
                        </Link>



                       

                    </div>}

            </div>
        </footer>
    );
}

