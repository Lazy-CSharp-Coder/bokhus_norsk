"use client";

import { ChangeEvent, useState } from "react";
import "./DeleteForm.module.css";
import type { DeleteOptions } from "./deletetypes";

import { RiDeleteBin6Line } from "react-icons/ri";

interface DeleteOptionsProps 
{
}


export function DeleteForm({ }: DeleteOptionsProps)
{
    const [options, setOptions] = useState<DeleteOptions>({ profile: true, clerk: false });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const { name, checked } = event.target;
        setOptions((prev) => ( name == "clerk" ? prev.clerk == false ? { clerk : !prev.clerk, profile : true} : { ...prev, [name]: checked } : { ...prev, [name]: checked }));
    };

    const handleDelete = () =>
    {


        
    };

    return (

        <form className="deleteForm">
            <div className="deleteFormHeadingIconWrapper">
            <h3 className="deleteFormHeading"> PLEASE CHOOSE DELETE OPTIONS</h3>
            <RiDeleteBin6Line className="deleteFormIcon" size="1.5rem"/>

            </div>


           
            <label className="deleteLabel">  <input name="profile" className="deleteCheck" type="checkbox" id="deleteProfile" checked={options.profile} onChange={handleChange} disabled={options.clerk}/> Delete profile information at Bokhus  </label>

            <label className="deleteLabel" id="deleteClerk"><input name="clerk" className="deleteCheck" type="checkbox" id="deleteClerk" checked={options.clerk} onChange={handleChange}/>Delete login information at Clerk  </label>
            <div className="deleteButtonDiv">
                <button type="submit" className="submitButton deleteButton">Delete</button>
                <button type="button" className="submitButton cancelButton">Cancel</button>
            </div>
 
        </form>


    );
}