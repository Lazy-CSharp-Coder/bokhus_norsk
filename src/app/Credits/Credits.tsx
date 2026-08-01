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
                    <p className="legalText">Except where otherwise noted below, all site content is provided and maintained by <BokHus/>.

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