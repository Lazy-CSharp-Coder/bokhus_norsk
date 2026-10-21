"use client";
import { useState, useRef } from "react";
import { GoLinkExternal } from "react-icons/go";
import { PiGlobeSimpleXLight } from "react-icons/pi";

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


import styles from "./BookAvailableIn.module.css";

import { Availability } from "@/types/booktypes";
import Link from "next/link";
import { useOutsideClick } from "@/functions/useOutsideClick";
import { BsCopy } from "react-icons/bs";
import { useWindowWidth } from "../hooks/useWindowWidth";

type NorBookTypes = "e-bok" | "innbundet" | "pocket" | "lydbok";

export function BookAvailableIn({ availability, classNameItem, fontSize, buyLink, bookTitle, shouldIsbnPopUpShow }: AvailabilityProps)
{

    const [isPopupShowing, setPopupShowing] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const listRef = useRef<HTMLUListElement>(null);

    const currentWidth = useWindowWidth();
    const tabletMode = currentWidth ? currentWidth < 1024 ? true : false : false;

    const availabilityNor : Availability[] = availability.map((book) =>
    {
        let norType: NorBookTypes = "e-bok";

        switch (book.bookType)
        {
            case "e-book": norType = "e-bok";
                break;

            case "hardcover": norType = "innbundet";
                break;

            case "paperback": norType = "pocket";
                break;

            case "audiobook": norType = "lydbok";
                break;

            default: break;

        }
        return {...book, bookType :  norType };
    });


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
        <div className={styles.bookAvailableDiv} style={{
            width: showPopup ? "100%" : "fitContent", justifyContent: tabletMode ? "center" : "start"

        }} >

            <ul ref={listRef} className={`${styles.availabilityList} flex`} onClick={() => (setPopupShowing(prev => !prev))}
                style={{ justifyContent: showPopup && tabletMode ? "center" : "start" }} >
                {
                    availabilityNor.map((item, index) =>
                        <li key={index + "#AV"} className={classNameItem ? classNameItem : styles.availabilityItem} style={{ fontSize: fontSize ? fontSize : "" }} >
                            {item.bookType}


                        </li>
                    )
                }
                {(isPopupShowing && showPopup) &&
                    <div className={styles.popUpIsbnDiv} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.isbnDiv}>
                            <span className={styles.isbnText}>ISBN NUMRE :</span>
                            <ul className={styles.isbnList}>

                                {availabilityNor.map((item, index) =>
                                    <li className={styles.isbnListItem} key={`isbnItem#${index}for${bookTitle}`}>{item.bookType} : <span className={styles.isbnNumber}>{item.isbn ? item.isbn : "ISBN er ikke registrert"}</span>
                                        <button className={styles.buttonCopy} onClick={() => handleCopy(item.isbn)}>

                                            <BsCopy className={styles.iconCopy} size="0.8rem" />
                                        </button>
                                    </li>

                                )}
                            </ul>
                        </div>
                        <div className={styles.buyLinkDiv}>
                            {buyLink ?
                                <Link className={styles.buyLink} href={buyLink}>Gå til kjøpsside <GoLinkExternal size={fontSize ? fontSize : "0.9rem"} className={styles.popUpLink} />  </Link> : <p className={styles.linkNotThereText}>Ikke utgitt. Ingen link tilgjengelig. <PiGlobeSimpleXLight className={styles.notThereLink} size={fontSize ? fontSize : "1.1rem"} /></p>}

                        </div>
                        <p className={styles.amazonTextPopup}>
                      Som Amazon-partner tjener vi provisjon på kvalifiserende kjøp.
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