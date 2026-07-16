"use server";

import { sanityWriteClient } from "@/sanity/client";
import { registerSchema, type UserData } from "./registerSchema";
import { success } from "zod";
import { sendNewUserAlert } from "../Contact/actions";
import { NewUserAlert } from "@/types/types";
import { getDefaultAutoSelectFamilyAttemptTimeout } from "node:net";


export async function submitUserData(rawData: UserData)
{
    const validateFields = registerSchema.safeParse(rawData);

    if (!validateFields.success)
    {
        return { success: false, error: "Invaild fields submitted" };
    }

    const arcInfo = rawData.arcInterest ? "User has registered an ARC profile for you to consider." : "User has not applied for ARC copies.";

    const newUserData: NewUserAlert = {
        email: rawData.email,
        arcInterest: arcInfo

    };

    const query = `*[_type == "User" && userId == $userId][0]._id`;
    const existingId = await sanityWriteClient.fetch<string | null>(query, { userId: rawData.userId });

    try
    {
        if (existingId)
        {
            // Update existing document - don't include _type as it's immutable
            await sanityWriteClient.patch(existingId).set({
                ...rawData,
                _updatedAt: new Date().toISOString()
            }).commit();
        } else
        {
            // Create new document
            await sanityWriteClient.create({
                _type: "User",
                ...rawData,
                _createdAt: new Date().toISOString()
            });


        }
        const response = await sendNewUserAlert(newUserData);
        if (!response.success) console.error("There was an error sending new user alert : " + response.message);
        return ({ success: true });
    }



    catch (error)
    {
        console.error("Sanity error : ", error);

        return { success: false, error: "Could not store data in Sanity database : " + error };
    }
}
