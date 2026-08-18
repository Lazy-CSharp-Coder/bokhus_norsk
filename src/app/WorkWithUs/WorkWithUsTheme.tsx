
import { WorkWithUs } from "./page";
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
            size: "1.7rem"
        },

    ];
    
interface WorkWithUsThemeProps 
{
    subject: WorkWithUs;
}

export function WorkWithUsTheme({ subject }: WorkWithUsThemeProps)
{
    const IconToUse = reactIconsArray[subject.iconNumber].icon;
    const size = reactIconsArray[subject.iconNumber].size;
    const { themeHeading, themeDescription, descriptionHeading, descriptionList, experience } = subject;

    return (
        <article className={`${styles.workWithUsThemeDiv} fadeInFromBelowAnim`} style={{animationDelay: "1.4s"}}>
            <div className={styles.themeHeadingIconWrapper} >
                <h3 className={styles.themeHeading}>{themeHeading.toUpperCase()}</h3>
                <IconToUse size={size} />
            </div>
            <div className={styles.themeSubjectDiv}>
                <p className={styles.themeDescription}>{themeDescription}</p>
                <p className={styles.descriptionHeading}> {descriptionHeading}</p>
                <ul className={styles.descriptionList}>
                    {descriptionList.map((item, index) =>
                        <li className={styles.descriptionListItem} key={"themeDescriptionItemKey" + index}>{item}</li>
                    )}

                </ul>
                <p className={styles.experience}>{experience}</p>
            </div>
        </article>


    );
}

export function WorkWithUsStartup()
{
    return (
        <div className={`${styles.workWithUsThemeDiv} fadeInFromLeftAnim`} style={{ animationDelay: "2.3s" }}>
            <div className={styles.themeIconWrapper}>
                <h3 className={styles.themeHeading}>Work with us</h3>
                <TfiWrite size="2rem" className={styles.iconWorkWithUs} />
            </div>
            <p className={styles.workWithUsSubTitle}>Click on category in list for more information</p>

        </div>

    );
}