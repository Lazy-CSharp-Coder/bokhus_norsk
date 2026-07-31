"use client";
import { useState, useRef } from "react";
import { GoLinkExternal } from "react-icons/go";

interface AvailabilityProps 
{
    availability: Availability[],
    buyLink?: string,
    bookTitle?: string,
    classNameItem?: string,
    fontSize?: string,
    shouldIsbnPopUpShow?: boolean;
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
import { useOutsideClick } from "@/functions/useOutsideClick";
import { BsCopy } from "react-icons/bs";

export function BookAvailableIn({ availability, classNameItem, fontSize, buyLink, bookTitle, shouldIsbnPopUpShow }: AvailabilityProps)
{

    const [isPopupShowing, setPopupShowing] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const listRef = useRef<HTMLUListElement>(null);

    const handleOutSideClick = (e: MouseEvent) =>
    {
        let shallClose = false;
        const currentElement = listRef.current;
        if (currentElement)
            if (currentElement.contains(e.target as Node)) shallClose = false;
            else shallClose = true;
        else return;

        if (shallClose) setPopupShowing(false);

    };

    const handleCopy = async (textToCopy: string) =>
    {
        try
        {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
        catch (error)
        {
            console.error("Failed to copy isbn : ", error);
        }
    };

    const showPopup = shouldIsbnPopUpShow == undefined || shouldIsbnPopUpShow == true ? true : false;
    useOutsideClick(handleOutSideClick);

    return (
        <div className="bookAvailableDiv">

            <ul ref={listRef} className="availabilityList flex" onClick={() => (setPopupShowing(prev => !prev))}>
                {
                    availability.map((item, index) =>
                        <li key={index + "#AV"} className={classNameItem ? classNameItem : "availabilityItem"} style={{ fontSize: fontSize ? fontSize : "" }} >
                            {item.bookType}


                        </li>
                    )
                }
                {(isPopupShowing && showPopup) &&
                    <div className="popUpIsbnDiv" onClick={(e) => e.stopPropagation()}>
                        <div className="isbnDiv">
                            <span className="isbnText">ISBN NUMBERS :</span>
                            <ul className="isbnList">

                                {availability.map((item, index) =>
                                    <li className="isbnListItem" key={`isbnItem#${index}for${bookTitle}`}>{item.bookType} : <span className="isbnNumber">{item.isbn ? item.isbn : "No ISBN number available"}</span>
                                        <button className="buttonCopy" onClick={() => handleCopy(item.isbn)}>

                                            <BsCopy className="iconCopy" size={fontSize ? fontSize : "0.7rem"} />
                                        </button>
                                    </li>

                                )}
                            </ul>
                        </div>
                        <div className="buyLinkDiv">
                            {buyLink ?
                                <Link className="buyLink" href={buyLink}>Go to buy page <GoLinkExternal size={fontSize ? fontSize : "0.9rem"} className="popUpLink" />  </Link> : <p className="linkNotThereText">No link to buy page available</p>}

                        </div>
                        <p className="amazonTextPopup">
                            As an Amazon Associate we earn from qualifying purchases.
                        </p>
                    </div>

                }






            </ul>


        </div>



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