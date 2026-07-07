import Link from "next/link";

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
                        Bokhus will like to say thanks and credit the following people for some of the visual elements, icons and images, on this web-page.

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

                        <li> book presentations</li>
                        <li> articles and historical content</li>
                        <li>digital downloads</li>
                        <li>newsletters</li>
                        <li> links to booksellers or third-party platforms</li>
                        <li>Logo for <strong>BP WebDev</strong> made by Avantella</li>
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