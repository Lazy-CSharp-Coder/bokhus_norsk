import { WorkWithUs } from "./page";

interface WorkWithUsThemeProps 
{
    subject: WorkWithUs;
}

export function WorkWithUsTheme({ subject }: WorkWithUsThemeProps)
{
    const { theme, list, iconNumber } = subject;
    return (
        <section className="workWithUsThemeArticle">
            <div className="themeIconWrapper">
                <h3 className="themeHeading">{theme}</h3>
                <span>icon nr : {iconNumber}</span>
            </div>
            <ul className="themeList">
                {list.map((item, index) =>
                    <li className="themeListItem">{item}</li>
                )}

            </ul>
        </section>

    );
}