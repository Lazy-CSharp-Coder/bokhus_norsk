import { BackgroundImage } from "@/components/global/BackgroundImage";
import AuthorSection from "@/components/authors/AuthorSection";

export default function SverresPage()
{
    const authorUid: string = "#SverreArsnes";
    // set a placeholder if not found 
    return (
        <>
            <BackgroundImage className="backgroundImageAuthorSverre" src={"/images/sverre/hand.jpg"} />

            <main className="authorsPage flex">

                <p>No info yes</p>
                {/* <AuthorSection author={} /> */}

            </main>

        </>




    );
}
