import { FaExclamationCircle } from "react-icons/fa";
import styles from "./RegErrorMessage.module.css"

interface RegErrorMessageProps 
{
    message?: string,
    iconSize? : string

}

export function RegErrorMessage({ message, iconSize }: RegErrorMessageProps)
{
    return (
        <div className={styles.regErrorDiv}>
            <FaExclamationCircle size={iconSize ?  iconSize : "1.2rem"} />{message}
        </div>
    );
}