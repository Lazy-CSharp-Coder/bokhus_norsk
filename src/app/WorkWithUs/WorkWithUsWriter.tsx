
import { WorkWithUs, WorkWithUsWriter } from "./page";
import { TfiWrite } from "react-icons/tfi";
import type { ReactIcons } from "@/types/types";
import styles from "./WorkWithUsTheme.module.css";
import { GiBookCover } from "react-icons/gi";
import { TfiPencilAlt } from "react-icons/tfi";

const reactIconsArray: ReactIcons[] =
    [
        {
            name: "Pencil",
            icon: TfiPencilAlt,
            size: "1.6rem"

        },

        {
            name: "Book Cover",
            icon: GiBookCover,
            size: "2.1rem"
        },

    ];
    


export function WorkWithUsAuthor({ subject }: {subject: WorkWithUsWriter})
{
    const IconToUse = reactIconsArray[subject.iconNumber].icon;
    const size = reactIconsArray[subject.iconNumber].size;
    const { themeHeading, themeSubHeading, themeDescription, descriptionHeading, descriptionList, experience, listFooter, endChapters } = subject;

    return (
        <article className={`${styles.workWithUsThemeDiv} fadeInFromBelowAnim`} style={{animationDelay: "1.4s"}}>
            <div className={styles.themeHeadingIconWrapper} >
                <h3 className={styles.themeHeading}>{themeHeading.toUpperCase()}</h3>
                <IconToUse size={size} />
            </div>
           
            <div className={styles.themeSubjectDiv}>
                 <h4 className={styles.themeSubHeading}>{themeSubHeading}</h4>
                { themeDescription
                .map((chapter) =>  <p className={styles.themeDescription}>{chapter}</p>) }
                <p className={styles.descriptionHeading}> {descriptionHeading}</p>
                <ul className={styles.descriptionList}>
                    {descriptionList.map((item, index) =>
                        <li className={styles.descriptionListItem} key={"themeDescriptionItemKey" + index}>{item}</li>
                    )}

                </ul>
                <p className={styles.listFooter}>{listFooter}</p>
            </div>
            <div className={styles.themeSubjectDiv}>





            </div>
        </article>


    );
}
