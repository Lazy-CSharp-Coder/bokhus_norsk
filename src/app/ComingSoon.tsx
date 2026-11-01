import { BokHusNo } from "@/components/common/BokHusCom";
import styles from "./ComingSoon.module.css";
import { ExpandingLine } from "@/components/common/ExpandingLine";
export function ComingSoon()
{
    return (
        <main className={styles.comingSoonMain}>
            <div className={styles.backgroundComingSoonPage}>
                <BokHusNo fontSize="14rem" />

            </div>
            <div className={`${styles.message} fadeInAnim`}>
          

                <h1 className="fadeInAnim" >Kommer snart </h1>
             
                 <div className={`${styles.comingSoonTextDiv} fadeInAnim`} style={{animationDelay : "2.5s"}}>
 <p> Vi er nå inne i de siste forbredelser for å legge ut denne siden.</p>
                 <p>Da kommer det norske bøker fra oss her</p>

                 </div>
                 
                 <ExpandingLine lineSize={1} animationDuration="2s"/>   
     <span className="scaleInAnim" style={{ display: "inline-block", animationDelay: "1s", animationDuration: "2s" }}>
                    <BokHusNo fontSize="2rem" /> 


                </span>
          
            </div>

        </main>
    );
}