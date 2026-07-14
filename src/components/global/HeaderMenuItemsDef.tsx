

import { RiHome4Line } from "react-icons/ri";  // HOME
import { BsPersonFill } from "react-icons/bs";  // AUTHORS
import { TbBooks } from "react-icons/tb";  // SERIES
import { TfiWrite } from "react-icons/tfi";
import { FaShop } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

import { IoMailOutline } from "react-icons/io5";
import { VscInfo } from "react-icons/vsc";
import type { ReactIcons} from "@/types/types";
import { CgShoppingCart } from "react-icons/cg";

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
            size: "1.1rem",
                pageLink : "/Register"
        },
        {
            name: "WHERE TO BUY",
            icon: CgShoppingCart,
            size: "1.5rem",
                pageLink : "/WhereToBuy"
        },
        {
            name: "WORK WITH US",
            icon: FaHandshake,
            size: "1.5rem",
                pageLink : "/WorkWithUs"
        },
        {
            name: "CONTACT",
            icon: IoMailOutline,
            size: "1.4rem",
                pageLink : "/Contact"
        },
        {
            name: "ABOUT",
            icon: VscInfo,
            size: "1.5rem",    pageLink : "/About"
        },


    ];

