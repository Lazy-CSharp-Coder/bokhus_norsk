"use client";
import { useState } from "react";
import { GoLinkExternal } from "react-icons/go";

interface AvailabilityProps 
{
    availability: Availability[],
    buyLink?: string,
    bookTitle?: string,
    classNameItem?: string,
    fontSize?: string;
}


interface PopUpIsbnAndLink 
{
    buyLink?: string,
    bookTitle?: string,
    fontSize?: string,
    isbn: string,
    bookType?: string;
}


import "./BookAvailableIn.module.css";

import { Availability } from "@/types/booktypes";
import Link from "next/link";

export function BookAvailableIn({ availability, classNameItem, fontSize, buyLink, bookTitle }: AvailabilityProps)
{

    const [itemShowing, setItemShowing] = useState<number>(-1);


    return (

        <ul className="availabilityList flex">
            {
                availability.map((item, index) =>
                    <li key={index + "#AV"} className={classNameItem ? classNameItem : "availabilityItem"} style={{ fontSize: fontSize ? fontSize : "" }} onClick={() => (itemShowing == index ? setItemShowing(-1) : setItemShowing(index))}>
                        {item.bookType}

                        {itemShowing == index &&
                            <PopUpIsbnAndLink buyLink={buyLink} bookTitle={bookTitle} isbn={availability[itemShowing].isbn} bookType={availability[itemShowing].bookType} fontSize={fontSize} />
                        }
                    </li>
                )
            }

        </ul>


    );

}

export function PopUpIsbnAndLink({ buyLink, bookTitle, isbn, bookType, fontSize }: PopUpIsbnAndLink)
{
    return (
        <div className="popUpIsbnDiv">
            <div className="isbnDiv">
                <p className="isbnText">ISBN NUMBER :</p>
                <p className="isbnNumber">{isbn}</p>

            </div>
            <div className="buyLinkDiv">
                {buyLink ?
                    <Link className="buyLink" href={buyLink}>Go to buy page <GoLinkExternal size={fontSize ? fontSize : "0.8rem"} className="popUpLink" />  </Link> : <p className="linkNotThereText">No link to buy page available</p>}
            </div>

            <p className="amazonText">

                As an Amazon Associate we earn from qualifying purchases.
            </p>



        </div>


    );
}