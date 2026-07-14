"use client";

interface AvailabilityProps 
{
    availability : number[],
    classNameItem? : string,
    fontSize? :string
}

import { useRouter } from "next/navigation";
import "./BookAvailableIn.module.css";
import { route } from "sanity/router";

export function BookAvailableIn({ availability, classNameItem, fontSize }: AvailabilityProps)
{
    const router = useRouter();
    const availabilityTable = ["e-book", "paperback", "hardcover"];
    return (
    
            <ul className="availabilityList flex">
                {
                    availability.map((item, index) =>
                        <li key={index + "#AV"} className={classNameItem ? classNameItem : "availabilityItem"}  style={{fontSize : fontSize ? fontSize :  ""}} onClick={()=> router.push("/WhereToBuy")}>
                            {availabilityTable[item]}
                        </li>
                    )
                }
            </ul>


    );

}