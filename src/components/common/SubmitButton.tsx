import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

        <button className="submitButton" type="submit" disabled={isSubmitting} >{isSubmitting ? <span className="submitMessage"><AiOutlineLoading3Quarters className="submitIcon" size="1em" /> {submitText} </span> : text}</button>
    );
}