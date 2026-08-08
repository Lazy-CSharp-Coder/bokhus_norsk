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

import "./Footer.module.css";

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
            <div className="logoTermsWrapper">
                <div className="logoFooterWrapper">
                    <Image className="logoFooterImg" src="/icons/logohvit.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>
                <nav className="termsGroup">

                    <TermsButton />
                    <PrivacyButton />
                    <CookieButton />
                    <AffiliateButton />
                </nav>
            </div>

            <div className="footerEndDiv desktopModeFooter">
                <div className="contactUsDiv">   <Link className="contactUsLink" href="/Contact"><IoMailOutline className="mailIcon" size="2rem" aria-label="Contact us" />CONTACT</Link>
                 


                </div>
                <div className="socialMediaDiv">

                    <div className="socialMediaGroup">

                        <FaInstagram className="instagramIcon" size={"1.8rem"} />
                        <FaFacebook className="facebookIcon" size={"1.7rem"} /></div>
                    <span className="logoText">SOCIAL MEDIA BOKHUS </span>


                </div>
                <div className="pageCreditsDiv">

                    <Link className="iconCreditDiv" href="/Credits">
                        {/* <IoIosInformationCircleOutline size="2.0rem" className="iconCreditIcon" /> */}
                        <IoDocumentTextOutline size="1.9rem" className="iconCreditIcon"/>
                        <span className="logoText">CREDITS
                        </span>


                    </Link>


                    <div className="logoBPDiv">
                          <a href="https://bpwebdev.no" target="_blank">
                          <LogoBPWebDev /> 
                          </a>
                
                        <span className="logoText">WEBPAGE BY
                        </span>

                    </div>


                </div>

            </div>
            <div className="arrowMenuWrapper mobileModeFooter">


                <PiArrowFatLinesUpFill className="mobileFooterEndIcon" size="2rem" onClick={() => setMobileMenuOpen((prev) => !prev)} />
                {isMobileMenuOpen &&
                    <div ref={mobileMenuRef} className="footerEndMobileDiv" onClick={() => setMobileMenuOpen(false)}>

                        <Link className="linkMobile" href="/Contact">
                            <IoMailOutline size="2rem" /> <span className="logoTextMobile">CONTACT</span></Link>


                        <Link className="linkMobile" href="/">
                            <FaInstagram size="1.8rem" />
                            <span className="logoTextMobile">INSTAGRAM</span></Link>

                        <Link className="linkMobile" href="/">
                            <FaFacebook className="facebookIcon" size="1.7rem" />
                            <span className="logoTextMobile">FACEBOOK</span></Link>






                        <Link href="/Credits" className="linkMobile">
                            <IoDocumentTextOutline size="1.8rem" className="iconCreditIcon"/>    
                            <span className="logoTextMobile">CREDITS</span>     </Link>




                        <Link href="https://bpwebdev.vercel.app" target="_blank" className="linkMobile">
                      <LogoBPWebDev />
                        <span className="logoTextMobile">WEBPAGE BY         </span>  
                        </Link>



                       

                    </div>}

            </div>
        </footer>
    );
}

