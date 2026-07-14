import Link from "next/link";

export function CookiePolicy()
{
    return (
        <section className="legalSection fadeInAnim">
            <h2 className="legalHeadingTop">
                Cookie Policy
            </h2>
            <h3 className="updateHeading">

                Last updated: 06/24/2026
            </h3>
            <article className="legalArticle">

                <div className="textDiv">
                    <p className="legalText">This Cookie Policy explains how BokHus.com uses cookies and similar technologies in accordance with the EU ePrivacy Directive and the General Data Protection Regulation (GDPR).</p>
                    <p className="legalText"> By using BokHus.com, you consent to the use of cookies as described in this policy.   </p>

                </div>
            </article>
            <article className="legalArticle">

                <h3 className="legalHeading">

                    What Are Cookies
                </h3>
                <div className="textDiv">
                    <p className="legalText">Cookies are small text files stored on your device when you visit a website.: </p>
                    <p className="legalText">They help websites : </p>

                    <ul className="legalList">

                        <li>remember user preferences</li>
                        <li> improve performance</li>
                        <li>analyze website traffic</li>
                        <li>newsletters</li>
                        <li> enhance user experience</li>

                    </ul>
                    <p className="legalText">Cookies may be temporary (session cookies) or stored for longer periods (persistent cookies).</p>

                </div>

            </article>

            <article className="legalArticle">
                <h3 className="legalHeading">Types of Cookies We Use</h3>

                <div className="textDiv">
                    <p className="legalTextSmallHeading">Essential Cookies </p>
                    <p className="legalText">These cookies are necessary for the website to function properly.
                        They may include:</p>


                    <ul className="legalList">

                        <li>security cookies</li>
                        <li> session management</li>
                        <li>login or form functionality</li>

                    </ul>
                    <p className="legalText">These cookies cannot be disabled because the website would not work properly without them.</p>
                    <p className="legalTextSmallHeading"> Analytics Cookies</p>

                    <p className="legalText">These cookies help us understand how visitors use the website.
                        They collect information such as:</p>
                    <ul className="legalList">

                        <li>pages visited</li>
                        <li> time spent on pages</li>
                        <li>navigation patterns</li>
                        <li>general geographic region</li>

                    </ul>
                    <p className="legalText">Examples may include:</p>
                    <ul className="legalList">

                        <li>Google Analytics</li>
                        <li>privacy-friendly analytics tools</li>


                    </ul>
                    <p className="legalText">The information collected is typically anonymized and used only for statistical purposes.</p>

                         <p className="legalTextSmallHeading"> Functional Cookies</p>

                    <p className="legalText">Functional cookies allow the website to remember user preferences, such as::</p>
                    <ul className="legalList">

                        <li>language settings</li>
                        <li> display preferences</li>
                        <li>saved options</li>
                
                    </ul>
                    <p className="legalText">These improve the user experience but are not strictly necessary.</p>
                 
                </div>

            </article>



            <article className="legalArticle">
                <h3 className="legalHeading">Third-Party Cookies</h3>

                <div className="textDiv">
                    <p className="legalText">Some cookies may be set by third-party services integrated into the website, including:</p>



                    <ul className="legalList">

                        <li>analytics provider</li>
                        <li>embedded media</li>
                        <li>social media platforms</li>
              
                    </ul>
                    These providers may process data according to their own privacy policies.
                </div>
            </article>






            <article className="legalArticle">
                <h3 className="legalHeading">Managing Cookies
                </h3>
                <div className="textDiv">
                    <p className="legalText">You can manage or disable cookies through your browser settings.
Most browsers allow you to:</p>
                
                    <ul className="legalList">

                        <li>block cookies</li>
                        <li>delete stored cookies</li>
                        <li>receive warnings before cookies are stored</li>
              
                    </ul>                  <p className="legalText">Instructions are usually available in your browser’s help section.
Please note that disabling cookies may affect the functionality of the website.</p>
                </div>
            </article>
            <article className="legalArticle">
                <h3 className="legalHeading">Cookie Consent</h3>

                <div className="textDiv">
                    <p className="legalText">  When you first visit BokHus.com, you may see a cookie consent banner that allows you to:</p>
                    <ul className="legalList">

                        <li>accept all cookies</li>
                        <li> reject non-essential cookies</li>
                        <li>customize cookie preferences</li>


                    </ul>
                  

                    <p className="legalText">Your preferences can be changed at any time.</p>
   
                </div>

            </article>
            <article className="legalArticle">
                <h3 className="legalHeading">
           Data Protection

                </h3>
                <div className="textDiv">
                    <p className="legalText">
               Cookies that process personal data are handled in accordance with our Privacy Policy and applicable data protection laws.
                    </p>
        
                </div>
            </article>
            <article className="legalArticle">
                <h3 className="legalHeading">
     Updates to This Cookie Policy
                </h3>
                <div className="textDiv">
                    <p className="legalText">We may update this Cookie Policy to reflect changes in legal requirements or website functionality.
Updated versions will be published on this page with a revised date.     </p>
                
                </div>
            </article>
      
            <article className="legalArticle">
                <h3 className="legalHeading">
                    Contact
                </h3>
                <div className="textDiv">
                    <p className="legalText">
                        For questions about our use of cookies, please contact BokHus. You can use the "Contact Us" form to do this by clicking this <Link className="legalContactLink" href="/Contact">link</Link>.
                    </p>

                </div>
            </article>
        </section >);
};