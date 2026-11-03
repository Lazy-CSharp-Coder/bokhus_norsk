import { BokHusNo } from "@/components/common/BokHusCom";
import styles from "./ComingSoon.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
import { QuotesBottom } from "@/app/no/(bokmaal)/components/QuotesBottom";
import { LiaSwatchbookSolid } from "react-icons/lia";

export function ComingSoon()
{
    return (
        <main className={styles.comingSoonMain}>
            <div className={styles.backgroundComingSoonPage}>
                <BokHusNo fontSize="14rem" />

            </div>
            <div className={`${styles.message} fadeInAnim`}>


                <h1 className={`${styles.heading} fadeInAnim`} >Kommer snart

                    <LiaSwatchbookSolid size="2.1rem" />
                </h1>
                <ExpandingLine lineSize={1} animationDuration="0s" animationDelay="0s" />
                <div className={`${styles.comingSoonTextDiv} fadeInAnim`} style={{ animationDuration: "2.2s" }}>
                    <p> Vi er nå inne i de siste forbredelser for å legge ut denne siden.</p>
                    <p>Da kommer det norske bøker fra oss på denne adressen.</p>

                </div>

                <QuotesBottom fontSize="1.2rem" />
                <ExpandingLine lineSize={1} animationDuration="2.5s" animationDelay="5s" />
                <span className={`${styles.animSpanBokhus} scaleInAnim`} style={{ animationDelay: "7s", animationDuration: "1s" }}>

                    <BokHusNo fontSize="1rem" />

                </span>



            </div>

        </main>
    );
}