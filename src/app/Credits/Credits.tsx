import Link from "next/link";
import "./credits.module.css";

export function Credits()
{
    return (
        <section className="legalSection fadeInAnim">
            <h2 className="legalHeadingTop">
                Creditations
            </h2>
            <article className="legalArticle">
                {/* <h3 className="legalHeading">

                    Introduction
                </h3> */}
                <div className="textDiv">
                    <p className="legalText">
                        Bokhus will like to say thanks and credit the following people/companies for some of the visual elements, icons and images, on this web-page.

                    </p>          <p className="legalText">
                        The time and effort spendt by these creators are well appreciated !

                    </p>
                </div>
            </article>
            <article className="legalArticle">

                <h3 className="legalHeading">

                    Icons
                </h3>
                <div className="textDiv">

                    <ul className="legalList">

                        <li><strong>Font Awesome 5 Icons</strong> (fa) by <Link href="https://creativecommons.org/" className="creditLink">Creative Commons</Link> under <Link href="https://creativecommons.org/licenses/by/4.0/" className="creditLicence">CC BY 4.0 Licence</Link>  </li>


                        <li><strong>Io Icons</strong> (io and io5) by <Link href="https://creativecommons.org/" className="creditLink">Ionic Icons</Link> under <Link href="https://github.com/ionic-team/ionicons/blob/master/LICENSE" className="creditLicence">MIT Licence</Link>  </li>


                        <li><strong>Material Design Icons</strong>  (md) by <Link href="https://google.com/" className="creditLink">Google Material Design Icons</Link> under <Link href="https://github.com/google/material-design-icons/blob/master/LICENSE" className="creditLicence">Apache License 2.0</Link>  </li>

                        <li><strong>Icon8 Line Awesome</strong>  (Lia) by <Link href="https://github.com/icons8/line-awesome/blob/master/LICENSE.md" className="creditLink">Icons8</Link> under <Link href="https://github.com/icons8/line-awesome/blob/master/LICENSE.md" className="creditLicence">MIT Licence</Link>  </li>


                        <li>Logo for <strong>BP - WebDev</strong> made by Avantella</li>
                    </ul>



                </div>
            </article>

            <article className="legalArticle"> <h3 className="legalHeading">Images
            </h3>
                <div className="textDiv">

                    <ul className="legalList">

                        <li> text</li>
                        <li> images</li>
                        <li>book covers</li>
                        <li>graphics</li>
                        <li>logos</li>
                        <li>layout and design</li>
                        <li>downloadable materials</li>
                    </ul>

                </div>
            </article>

        </section >);
}