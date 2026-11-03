
import styles from "./BestSellerList.module.css";
export interface BestSellerListProps
{

    bestSellerIntro?: string,
    fontSize? : string,
    bestSellerList?: string[];

}
export function BestSellerList({ bestSellerIntro, bestSellerList, fontSize }: BestSellerListProps)
{
    
    return (
        <ul className={styles.bestSellerList} style={{fontSize: fontSize}}>{bestSellerIntro}
            {bestSellerList?.map((item, index, array) =>
                <li key={index + "BS"} className={styles.bestSellerText}>{item}<span className={styles.bestSellerSeparator}>{`${index == array.length - 2 ? " and" : (index == array.length - 1) ? "" : ","}`}</span></li>
            )}
        </ul>
    );

}
