import Link from "next/link";

export function PrivacyPolicy()
{   

    return (
        <section className="legalSection fadeInAnim">
            <h2 className="legalHeadingTop">
                Privacy Policy & Cookie Policy
            </h2>
            <h3 className="updateHeading">
                Last updated: 16 September 2026
            </h3>
            
            <article className="legalArticle">
                <div className="textDiv">
                    <p className="legalText">This Privacy Policy explains how BokHus.com (”BokHus”, ”we”, ”us” or ”our”) collects, uses, and protects personal information in accordance with the EU General Data Protection Regulation (GDPR) and relevant Norwegian privacy laws.</p>
                    <p className="legalText">By using BokHus.com, you agree to the practices described in this policy.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Data Controller</h3>
                <div className="textDiv">
                    <p className="legalText">BokHus.com is a book publishing platform and community maintained by Hushald AS.</p>
                    <p className="legalText">The data controller responsible for processing personal data on BokHus.com is:</p>
                    <p className="legalText">Hushald AS</p>
                    <p className="legalText">Vestre Vadmyra 35</p>
                    <p className="legalText">5172 LODDEFJORD</p>
                    <p className="legalText">Norway</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Personal Data We Collect</h3>
                <div className="textDiv">
                    <p className="legalTextSmallHeading">Information you provide</p>
                    <p className="legalText">When you interact with the website, register an account, or apply for programs, you may provide:</p>
                    <ul className="legalList">
                        <li>name and email address</li>
                        <li>messages sent through contact forms</li>
                        <li>newsletter subscriptions</li>
                        <li>profile information, including reading habits (e.g., reading speed, preferred formats), genre preferences, and platforms where you post reviews[cite: 1, 8]</li>
                        <li>author or contributor information</li>
                    </ul>

                    <p className="legalTextSmallHeading">Automatically collected information</p>
                    <p className="legalText">When you visit BokHus.com, we process technical information through Cloudflare to maintain website infrastructure, security, and performance. We use Cloudflare Web Analytics to obtain general aggregated statistics about website traffic. Cloudflare Web Analytics does not use cookies or local storage to collect analytics information, and it does not create individual visitor profiles.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Purpose and Legal Basis for Processing</h3>
                <div className="textDiv">
                    <p className="legalText">We process personal data for the following purposes:</p>
                    <ul className="legalList">
                        <li>authenticating users and maintaining secure login sessions[cite: 2]</li>
                        <li>responding to inquiries and messages</li>
                        <li>managing newsletter subscriptions and ARC (Advance Reader Copy) reader relationships</li>
                        <li>improving website functionality and performance</li>
                        <li>maintaining website security</li>
                    </ul>
                    
                    <p className="legalTextSmallHeading">Legal Basis</p>
                    <p className="legalText">Under GDPR, our legal basis for processing personal data includes:</p>
                    <ul className="legalList">
                        <li><strong>Consent:</strong> When you voluntarily subscribe to newsletters, create a profile, or submit forms.</li>
                        <li><strong>Legitimate interest:</strong> To improve website performance, security, and user experience.</li>
                        <li><strong>Contractual necessity:</strong> When working with authors, contributors, or partners.</li>
                    </ul>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Cookies and Tracking Technologies</h3>
                <div className="textDiv">
                    <p className="legalText">Cookies are small text files stored on your device. BokHus currently uses cookies only where they are technically necessary to provide website functionality requested by the user. We do not use Google Analytics, personalised advertising, behavioural tracking, cross-site tracking, or optional analytics cookies.</p>
                    
                    <p className="legalTextSmallHeading">Authentication Cookies</p>
                    <p className="legalText">BokHus uses an authentication service provided by Clerk. When you sign in, create an account, or use an authenticated part of BokHus, Clerk uses technically necessary cookies to establish and maintain your secure login session[cite: 2]. These cookies (such as `__session` or client cookies) are required to:</p>
                    <ul className="legalList">
                        <li>recognise that you are signed in[cite: 2]</li>
                        <li>securely maintain your user session and authenticate requests[cite: 2]</li>
                        <li>protect accounts against unauthorised access[cite: 2]</li>
                    </ul>
                    <p className="legalText">Because these cookies are strictly necessary to provide requested functionality, they are not optional, and we do not display a cookie consent banner[cite: 2]. Blocking them in your browser settings may prevent you from signing in.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Amazon Associates Program</h3>
                <div className="textDiv">
                    <p className="legalText">This website participates in the Amazon Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon websites.</p>
                    <p className="legalText"><strong>As an Amazon Associate I earn from qualifying purchases.</strong></p>

                    <p className="legalTextSmallHeading">Affiliate Links</p>
                    <p className="legalText">Some pages on this website contain affiliate links to books published by our company and sold through Amazon. If you click one of these links and make a qualifying purchase, we may earn an Amazon Associates commission at no additional cost to you. We may also receive revenue from the sale of our books as the publisher or rights holder, where applicable.</p>
                    <p className="legalText">Our use of affiliate links does not affect the price you pay.</p>

                    <p className="legalTextSmallHeading">Cookies and Tracking</p>
                    <p className="legalText">When you click an Amazon affiliate link, you are redirected to Amazon's website. Amazon may use cookies or similar technologies to track your visit and determine whether a qualifying purchase is made. These cookies are controlled by Amazon and are subject to Amazon's own Privacy Notice and Terms of Use.</p>
                    <p className="legalText">We do not receive your payment details, shipping address, or any other personal information related to your Amazon purchases. We only receive aggregated reporting, such as clicks, qualifying purchases, and commissions earned.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Data Sharing</h3>
                <div className="textDiv">
                    <p className="legalText">We do not sell personal data.</p>
                    <p className="legalText">Personal data may be shared with trusted service providers that support the website, such as:</p>
                    <ul className="legalList">
                        <li>authentication providers (Clerk)</li>
                        <li>website infrastructure and performance services (Cloudflare)</li>
                        <li>email delivery platforms (Resend)</li>
                    </ul>
                    <p className="legalText">These providers process data only on our behalf and according to GDPR requirements. They maintain their own privacy policies describing how they process information.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Data Storage and Security</h3>
                <div className="textDiv">
                    <p className="legalText">We implement reasonable technical and organisational measures to protect personal data, including:</p>
                    <ul className="legalList">
                        <li>secure hosting and encrypted connections (HTTPS)</li>
                        <li>limited, authenticated access to personal information</li>
                    </ul>
                    <p className="legalText">Personal data is stored only for as long as necessary to fulfill the purposes described in this policy.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Your Rights Under GDPR</h3>
                <div className="textDiv">
                    <p className="legalText">Users located in the European Economic Area have the following rights. You may request:</p>
                    <ul className="legalList">
                        <li>access to your personal data</li>
                        <li>correction of inaccurate data</li>
                        <li>deletion of your data ("right to be forgotten")</li>
                        <li>restriction of processing</li>
                        <li>data portability</li>
                        <li>withdrawal of consent at any time</li>
                    </ul>
                    <p className="legalText">You also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet).</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">International Data Transfers</h3>
                <div className="textDiv">
                    <p className="legalText">If personal data is processed outside the European Economic Area, BokHus ensures that appropriate safeguards are in place, such as EU Standard Contractual Clauses and GDPR-compliant service providers.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Data Retention</h3>
                <div className="textDiv">
                    <p className="legalText">Personal data is retained only as long as necessary for the purpose it was collected, unless longer retention is required by law. Typical retention periods may include:</p>
                    <ul className="legalList">
                        <li>contact messages: up to 12 months</li>
                        <li>newsletter and profile data: until account deletion or unsubscribe</li>
                    </ul>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Children's Privacy</h3>
                <div className="textDiv">
                    <p className="legalText">BokHus.com is not intended for children under 16 years of age. We do not knowingly collect personal data from children. If such data is discovered, it will be deleted as soon as possible.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Changes to This Policy</h3>
                <div className="textDiv">
                    <p className="legalText">We may update this Privacy Policy from time to time, for example if we introduce new authentication technologies, additional cookies, or optional analytics. The updated version will be published on this page with a revised date.</p>
                </div>
            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Contact</h3>
                <div className="textDiv">
                    <p className="legalText">For questions regarding this Privacy Policy, our use of cookies, or the handling of personal data, please contact BokHus. You can use the contact form to do this by clicking this <Link className="legalContactLink" href="/Contact">link</Link>.</p>
                </div>
            </article>
        </section>
    );
});
};