"use client";
import { AffiliateButton, CookieButton, PrivacyButton, TermsButton } from "./ButtonsFooter";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { LogoBPWebDev } from "./LogoBPWebDev";
import "./Footer.module.css";
import { useState } from "react";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

export function Footer()
{
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <footer>
            <div className="logoTermsWrapper">
                <div className="logoFooterWrapper">
                    <Image className="logoFooterImg" src="/icons/logosvart.png" alt="bokhus logo" fill={true} sizes="(max-width: 128px) 100vw, 50vw" loading="eager" />
                </div>
                <div className="termsGroup">

                    <TermsButton />
                    <PrivacyButton />
                    <CookieButton />
                    <AffiliateButton />
                </div>
            </div>

            <div className="footerEndDiv desktopModeFooter">
                <div className="contactUsDiv">   <Link className="contactUsLink" href="/Contact"><IoMailOutline className="mailIcon" size="2rem" /></Link>
                    <span className="logoText">CONTACT</span>


                </div>
                <div className="socialMediaDiv">

                    <div className="socialMediaGroup">

                        <FaInstagram className="instagramIcon" size={"1.8rem"} />
                        <FaFacebook className="facebookIcon" size={"1.7rem"} /></div>
                    <span className="logoText">SOCIAL MEDIA BOKHUS </span>


                </div>
                <div className="pageCreditsDiv">

                    <Link className="iconCreditDiv" href="/Credits">
                        <IoIosInformationCircleOutline size="2.09rem" className="iconCreditIcon" />
                        <span className="logoText">CREDITS
                        </span>


                    </Link>


                    <div className="logoBPDiv">
                        <LogoBPWebDev />
                        <span className="logoText">WEBPAGE BY
                        </span>

                    </div>


                </div>

            </div>
            <PiArrowFatLinesUpFill className="mobileFooterEndIcon mobileModeFooter" size="2rem" onClick={() => setMobileMenuOpen((prev) => !prev)} />
            {isMobileMenuOpen &&
                <div className="footerEndMobileDiv mobileModeFooter">
                    <div className="contactUsDivMobile">
                        <Link className="contactUsLink" href="/Contact">
                            <IoMailOutline className="mailIcon" size="2rem" /></Link>

                        <span className="logoText">CONTACT</span>

                    </div>

                    <div className="contactUsDivMobile">

                        <FaInstagram className="instagramIcon" size={"1.8rem"} />
                        <span className="logoText">BokHus at Instagram</span></div>
                    <div className="contactUsDivMobile">

                        <FaFacebook className="facebookIcon" size={"1.7rem"} />
                        <span className="logoText">BokHus at Facebook</span>

                    </div>




                    <Link className="contactUsDivMobile" href="/Credits">
                        <IoIosInformationCircleOutline size="2.09rem" className="iconCreditIcon" />
                        <span className="logoText">CREDITS
                        </span>


                    </Link>


                    <div className="contactUsDivMobile">
                        <LogoBPWebDev />
                        <span className="logoText">WEBPAGE BY
                        </span>

                    </div>





                </div>}


        </footer>
    );
}

