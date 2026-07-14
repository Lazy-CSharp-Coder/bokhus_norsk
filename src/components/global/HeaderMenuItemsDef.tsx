
import { HeaderMenuItem } from "./HeaderMenuItem";

import { RiHome4Line } from "react-icons/ri";  // HOME
import { BsPersonFill } from "react-icons/bs";  // AUTHORS
import { TbBooks } from "react-icons/tb";  // SERIES
import { TfiWrite } from "react-icons/tfi";
import { FaShop } from "react-icons/fa6";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { VscInfo } from "react-icons/vsc";
import type { ReactIcons} from "@/types/types";

export const menuItems: ReactIcons[] =
    [
        {
            name: "HOME",
            icon: RiHome4Line,
            size: "1.5rem",
            pageLink : "/"

        },

        {
            name: "AUTHORS",
            icon: BsPersonFill,
            size: "1.5rem",
                pageLink : "/Authors"
        },

        {
            name: "SERIES",
            icon: TbBooks,
            size: "1.5rem",
                pageLink : "/Series"
        },

        {
            name: "REGISTER",
            icon: TfiWrite,
            size: "1.2rem",
                pageLink : "/Register"
        },
        {
            name: "WHERE TO BUY",
            icon: FaShop,
            size: "1.5rem",
                pageLink : "/WhereToBuy"
        },
        {
            name: "WORK WITH US",
            icon: RiContactsBookLine,
            size: "1.5rem",
                pageLink : "/WorkWithUs"
        },
        {
            name: "CONTACT",
            icon: IoMailOutline,
            size: "1.5rem",
                pageLink : "/Contact"
        },
        {
            name: "ABOUT",
            icon: VscInfo,
            size: "1.5rem",    pageLink : "/About"
        },


    ];

