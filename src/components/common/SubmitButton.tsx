import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from  "./SubmitButton.module.css";

interface SubmitButtonProps
{
    buttonText?: string,
    submitMessage?: string,
    isSubmitting: boolean
}

export function SubmitButton({ buttonText, submitMessage, isSubmitting }: SubmitButtonProps)
{
    const text = buttonText ? buttonText : "Submit";
    const submitText = submitMessage ? submitMessage : "Submitting";

    return (

        <button className={styles.submitButton} type="submit" disabled={isSubmitting} >{isSubmitting ? <span className={styles.submitMessage}><AiOutlineLoading3Quarters className={styles.submitIcon} size="1em" /> {submitText} </span> : text}</button>
    );
}