
import { WorkWithUs } from "./page";
import { CiEdit } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { GiPencilBrush } from "react-icons/gi";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { PiFloppyDisk } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import type { ReactIcons } from "@/types/types";



const reactIconsArray: ReactIcons[] =
    [
        {
            name : "default",
            icon: FaBook,
            size : "2rem"

        },
        
        {
             name : "Writing & Editing",
            icon: CiEdit,
            size: "2.3rem"
        },
           
        {
             name : "Publishing",
            icon: GoStack,
            size: "2rem"
        },
           
        {
            name : "Design",
            icon: GiPencilBrush,
            size: "1.8rem"
        },
           {
            name : "Translation",
            icon: FaRegCopy,
            size: "2rem"
        },
           {
            name : "Social media",
            icon: IoShareSocialOutline,
            size: "2rem"
        },
           {
            name : "AI services",
            icon: RiComputerLine,
            size: "2rem"
        },   {
            name : "Research",
            icon: PiMagnifyingGlassBold,
            size: "1.8rem"
        },   {
            name : "OCR correction",
            icon: PiFloppyDisk,
            size: "2rem"
        },   {
            name : "Courses",
            icon: GiTeacher,
            size: "2rem"
        },   {
            name : "Consulting",
            icon: FaFileCircleQuestion,
            size: "1.8rem"
        }
    ];




interface WorkWithUsThemeProps 
{
    subject: WorkWithUs;
}

export function WorkWithUsTheme({ subject }: WorkWithUsThemeProps)
{
    const IconToUse = reactIconsArray[subject.iconNumber].icon;
    const size = reactIconsArray[subject.iconNumber].size;
    const { theme, list, iconNumber } = subject;
    return (
        <div className="workWithUsThemeDiv fadeInFromLeftAnim">
            <div className="themeIconWrapper">
                <h3 className="themeHeading">{theme}</h3>
                <IconToUse size={size} className="iconWorkWithUs"/>
            </div>
            <ul className="themeList">
                {list.map((item, index) =>
                    <li key={"themeList" + index}className="themeListItem">{item}</li>
                )}

            </ul>
        </div>

    );
}


export function WorkWithUsStartup()
{

    return (
        <div className="workWithUsThemeDiv fadeInFromLeftAnim" style={{animationDelay:"2.3s"}}>
            <div className="themeIconWrapper">
                <h3 className="themeHeading">Work with us</h3>
                <TfiWrite size="2rem" className="iconWorkWithUs"/>
            </div>
            <p className="workWithUsSubTitle">Click on category in list for more information</p>

        </div>

    );
}