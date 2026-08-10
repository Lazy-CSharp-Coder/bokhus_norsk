import styles from  "./LogoBPWebDev.module.css";
import Image from "next/image";

export function LogoBPWebDev()
{


    return (
     <Image className={styles.logoBPImgStandard} src="/icons/favIconBP.png" alt="logo BP WebDev" width={64} height={64}/>
    )
  

}