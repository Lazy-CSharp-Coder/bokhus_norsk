import { AffiliateButton, CookieButton, PrivacyButton, TermsButton } from "./ButtonsFooter";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BokHusCom } from "./BokHusCom";
import { LogoBPWebDev } from "./LogoBPWebDev";
export function Footer()
{
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

         <div className="footerEndDiv">
               <div className="socialMediaDiv">
                <span className="logoText">SOCIAL MEDIA
                </span>
                <div className="socialMediaGroup">
                    <Link className="contactUsLink" href="/Contact"><IoMailOutline className="mailIcon" size="1.8rem" /></Link>
                    <FaInstagram className="instagramIcon" size={"1.7rem"} />
                    <FaFacebook className="facebookIcon" size={"1.7rem"} /></div>


            </div>
            <div className="iconCreditDiv">
                <span className="logoText">ICONS BY
                </span>
                <IoIosInformationCircleOutline size="1.8rem" className="iconCreditIcon" />

            </div>


            <div className="logoBPTextDiv">
                <span className="logoText">WEBPAGE BY
                </span>
                <LogoBPWebDev />
            </div>

         </div>

        </footer>
    );
}

