"use client";

import { ChangeEvent, useState } from "react";
import "./DeleteForm.module.css";
import type { DeleteOptions } from "./deletetypes";
import { handleDelete } from "../actions";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import  ErrorUI  from "../../test"
import { handleBuildComplete } from "next/dist/build/adapter/build-complete";





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

        <form className="deleteForm" action={handleAction}>
            <div className="deleteFormHeadingIconWrapper">
                <h3 className="deleteFormHeading"> PLEASE CHOOSE DELETE OPTIONS</h3>
                <RiDeleteBin6Line className="deleteFormIcon" size="1.5rem" />
            </div>

            <label className="deleteLabel">  <input name="profile" className="deleteCheck" type="checkbox" id="deleteProfile" checked={options.profile} onChange={handleChange} disabled={options.clerk} /> Delete profile information at Bokhus  </label>

            <label className="deleteLabel" id="deleteClerk"><input name="clerk" className="deleteCheck" type="checkbox" id="deleteClerk" checked={options.clerk} onChange={handleChange} />Delete login information at Clerk  </label>
            <div className="deleteButtonDiv">
                <button type="submit" className={`submitButton deleteButton ${noChecked ? "disable": ""}`} disabled={noChecked || pending}>{pending ? "Deleting data..." : "Delete"}</button>
                <button type="button" className="submitButton cancelButton" onClick={() => router.back()}>Cancel</button>
            </div>

        </form>


    );
}
