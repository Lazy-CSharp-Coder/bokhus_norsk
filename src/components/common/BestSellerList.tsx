import type { BestSellerListProps } from "@/types/booktypes";
import "./BestSellerList.module.css";

export function BestSellerList({ bestSellerIntro, bestSellerList }: BestSellerListProps)
{
    
    return (
        <ul className="bestSellerList">{bestSellerIntro}
            {bestSellerList?.map((item, index, array) =>
                <li key={index + "BS"} className="bestSellerText">{item}<span className="bestSellerSeparator">{`${index == array.length - 2 ? " and" : (index == array.length - 1) ? "" : ","}`}</span></li>
            )}
        </ul>
    );

}
