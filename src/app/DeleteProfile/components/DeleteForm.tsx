"use client";

import { ChangeEvent, useState } from "react";
import type { DeleteOptions } from "./deletetypes";
import { handleDelete } from "../actions";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import  ErrorUI  from "../../error"
import styles from "./DeleteForm.module.css";

export function DeleteForm()
{
    const [options, setOptions] = useState<DeleteOptions>({ profile: true, clerk: false });

    const [error, setCaughtError] = useState<Error |null>(null);


    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const { name, checked } = event.target;
        setOptions((prev) => (name == "clerk" ? prev.clerk == false ? { clerk: !prev.clerk, profile: true } : { ...prev, [name]: checked } : { ...prev, [name]: checked }));
    };

    const handleAction = async (formData : FormData) =>
    {
        try {
            await handleDelete(formData);

            window.location.href = "/";

           
        }
        catch(error)
        {
            console.error("Deletion failed :" , error);
            setCaughtError(error instanceof Error ? error : new Error("Failed to delete account"));
            
        }
    }

    const { pending} = useFormStatus();;
    const noChecked = !options.clerk && !options.profile;
    const router = useRouter();
   
    if(error) 
    {
        <ErrorUI error={error} reset={() => setCaughtError(null)}/>
    }

    return (

        <form className={styles.deleteForm} action={handleAction}>
            <div className={styles.deleteFormHeadingIconWrapper}>
                <h3 className={styles.deleteFormHeading}> VENNLIGST VELG SLETTINGSALTERNATIVER</h3>
                <RiDeleteBin6Line className={styles.deleteFormIcon} size="1.5rem" />
            </div>

            <label className={styles.deleteLabel} htmlFor="deleteProfile">
                  <input name="profile" className={styles.deleteCheck} type="checkbox" id="deleteProfile" checked={options.profile} onChange={handleChange} disabled={options.clerk} /> Slett profil på Bokhus  </label>

            <label className={styles.deleteLabel} htmlFor="deleteClerk"><input name="clerk" className={styles.deleteCheck} type="checkbox" id="deleteClerk" checked={options.clerk} onChange={handleChange} />Slett login informasjon hos Clerk  </label>
            <div className={styles.deleteButtonDiv}>
                <button type="submit" className={`submitButton ${styles.deleteButton} ${noChecked ? styles.disable : ""}`} disabled={noChecked || pending}>{pending ? "Sletter data..." : "Slett"}</button>
                <button type="button" className={`submitButton ${styles.cancelButton}`} onClick={() => router.back()}>Avbryt</button>
            </div>

        </form>


    );
}
