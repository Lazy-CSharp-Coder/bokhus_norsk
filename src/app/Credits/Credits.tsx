import Link from "next/link";
import "./credits.module.css";
import { BokHus } from "@/components/common/BokHus";

export function Credits()
{
    return (
        <section className="legalSection fadeInAnim">
            <h2 className="legalHeadingTop">
                Creditations
            </h2>


            <article className="legalArticle"> <h3 className="legalHeading">Web page design and development
            </h3>
                <div className="textDiv">

                    <p className="legalText">

                        Web UI design and code development by
                        <Link className="creditLink" href="https://bpwebdev.vercel.app"> BP WebDev</Link>.
                    </p>
                    <p className="legalText">Except where otherwise noted below, all site content is provided and maintained by <BokHus />.

                    </p>


                </div>
            </article>
            <article className="creditVisualElements">
                <h3 className="legalHeading">

                    Visual elements
                </h3>
                <div className="textDiv">
                    <p className="legalText">
                        Bokhus will like to say thanks and credit the following people/companies for some of the visual elements, icons and images, on this web-page.

                    </p>          <p className="legalText">
                        The time and effort spendt by these creators are well appreciated !

                    </p>
                </div>
                <div className="creditVisualTextDiv">

                    <h3 className="creditVisualHeading">

                        Icons
                    </h3>
                    <ul className="legalList">

                        <li><strong>Ant Design Icons</strong> (ai) by <Link href="https://github.com/ant-design/ant-design-icons" className="creditLink">Ant Design Icons</Link> under <Link href="https://opensource.org/license/MIT" className="creditLicence">MIT Licence</Link>. </li>

                        <li><strong>Bootstrap Icons</strong> (bs) by <Link href="https://github.com/twbs/icons" className="creditLink">Bootstrap Icons</Link> under <Link href="https://opensource.org/license/MIT" className="creditLicence">MIT Licence</Link>. </li>

                        <li><strong>Circum Icons</strong> (ci) by <Link href="https://circumicons.com/" className="creditLink">Circum</Link> under <Link href="https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE" className="creditLicence">MPL 2.0 License</Link>. </li>


                        <li><strong>Css.gg Icons</strong> (cg) by <Link href="https://github.com/astrit/css.gg" className="creditLink">CSS*GG</Link> under <Link href="https://opensource.org/license/MIT" className="creditLicence">MIT License</Link>. </li>


                        <li><strong>Font Awesome 5 Icons</strong> (fa) by <Link href="https://fontawesome.com/" className="creditLink">Font Awesome</Link> under <Link href="https://creativecommons.org/licenses/by/4.0/" className="creditLicence">CC BY 4.0 Licence</Link>  </li>


                        <li><strong>Font Awesome 6 Icons</strong> (fa6) by <Link href="https://fontawesome.com/" className="creditLink">Font Awesome</Link> under <Link href="https://creativecommons.org/licenses/by/4.0/" className="creditLicence">CC BY 4.0 Licence</Link>. </li>


                        <li><strong>Game Icons</strong> (gi) by <Link href="https://game-icons.net/" className="creditLink">Game-icons.net</Link> under <Link href="https://creativecommons.org/licenses/by/3.0/" className="creditLicence">CC BY 3.0 Licence</Link>.  </li>

                        <li><strong>Github Octicons Icons</strong> (go) by <Link href="https://primer.style/octicons/" className="creditLink">Primer</Link> under <Link href="https://opensource.org/license/MIT" className="creditLicence">MIT License</Link>. </li>


                        <li><strong>Ionicons 4 Icons</strong> (io) by <Link href="https://ionic.io/ionicons" className="creditLink">Ionic Icons</Link> under <Link href="https://github.com/ionic-team/ionicons/blob/master/LICENSE" className="creditLicence">MIT Licence</Link>. </li>


                        <li><strong>Ionicons 5 Icons</strong> (io5) by <Link href="https://ionic.io/ionicons" className="creditLink">Ionic Icons</Link> under <Link href="https://github.com/ionic-team/ionicons/blob/master/LICENSE" className="creditLicence">MIT Licence</Link>.  </li>

                        <li><strong>Lucide Icons</strong> (lu) by <Link href="https://lucide.dev/" className="creditLink">Lucide</Link> under <Link href="https://github.com/lucide-icons/lucide/blob/main/LICENSE" className="creditLicence">ISC Licence</Link>.  </li>






                        <li><strong>Font Awesome 5 Icons</strong> (fa) by <Link href="https://fontawesome.com/" className="creditLink">Font Awesome</Link> under <Link href="https://creativecommons.org/licenses/by/4.0/" className="creditLicence">CC BY 4.0 Licence</Link>  </li>


                        <li><strong>Io Icons</strong> (io and io5) by <Link href="https://creativecommons.org/" className="creditLink">Ionic Icons</Link> under <Link href="https://github.com/ionic-team/ionicons/blob/master/LICENSE" className="creditLicence">MIT Licence</Link>  </li>


                        <li><strong>Material Design Icons</strong>  (md) by <Link href="https://google.com/" className="creditLink">Google Material Design Icons</Link> under <Link href="https://github.com/google/material-design-icons/blob/master/LICENSE" className="creditLicence">Apache License 2.0</Link>  </li>

                        <li><strong>Icon8 Line Awesome</strong>  (la) by <Link href="https://github.com/icons8/line-awesome/blob/master/LICENSE.md" className="creditLink">Icons8</Link> under <Link href="https://github.com/icons8/line-awesome/blob/master/LICENSE.md" className="creditLicence">MIT Licence</Link>  </li>


                        <li><strong>BP WebDev </strong> logo made by Avantella</li>
                        <li>More credits will be applied later</li>
                    </ul>



                </div>

                <div className="creditVisualTextDiv">
                    <h3 className="creditVisualHeading">Images
                    </h3>
                    <ul className="legalList">

                        <li> Fouintain pen image used on Author page made by <Link className="creditLicence" href="https://unsplash.com/photos/fountain-pen-on-black-lined-paper-y02jEX_B0O0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Aaron Burden at Unsplash</Link> </li>

                    </ul>

                </div>



            </article>




        </section >);
}