"use client";

interface AvailabilityProps 
{
    availability : Availability[]
    classNameItem? : string,
    fontSize? :string
}

import { useRouter } from "next/navigation";
import "./BookAvailableIn.module.css";
import { route } from "sanity/router";
import { Availability } from "@/types/booktypes";

export function BookAvailableIn({ availability, classNameItem, fontSize }: AvailabilityProps)
{
    const router = useRouter();

    return (
    
            <ul className="availabilityList flex">
                {
                    availability.map((item, index) =>
                        <li key={index + "#AV"} className={classNameItem ? classNameItem : "availabilityItem"}  style={{fontSize : fontSize ? fontSize :  ""}} onClick={()=> router.push("/WhereToBuy")}>
                            {item.bookType}
                        </li>
                    )
                }
            </ul>


    );

}