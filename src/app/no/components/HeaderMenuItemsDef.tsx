

import { RiHome4Line } from "react-icons/ri";  // HOME
import { BsPersonFill } from "react-icons/bs";  // AUTHORS
import { TbBooks } from "react-icons/tb";  // SERIES
import { FaHandshake } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { VscInfo } from "react-icons/vsc";
import type { ReactIcons } from "@/types/types";
import { CgShoppingCart } from "react-icons/cg";

export const menuItems: ReactIcons[] =
    [
        {
            name: "HJEM",
            icon: RiHome4Line,
            size: "1.5rem",
            pageLink: "/"

        },

        {
            name: "FORFATTERE",
            icon: BsPersonFill,
            size: "1.5rem",
            pageLink: "/Authors"
        },

        {
            name: "BØKER",
            icon: TbBooks,
            size: "1.5rem",
            pageLink: "/Series"
        },

               {
            name: "HVOR HANDLER JEG ?",
            icon: CgShoppingCart,
            size: "1.5rem",
            pageLink: "/WhereToBuy"
        },
        {
            name: "ARBEID MED OSS",
            icon: FaHandshake,
            size: "1.5rem",
            pageLink: "/WorkWithUs"
        },
        {
            name: "KONTAKT",
            icon: IoMailOutline,
            size: "1.4rem",
            pageLink: "/Contact"
        },
        {
            name: "OM OSS",
            icon: VscInfo,
            size: "1.5rem",
            pageLink: "/About"
        },


    ];

