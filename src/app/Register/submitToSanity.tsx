"use server";

import { sanityWriteClient } from "@/sanity/client";
import { BrandedClerkUserId, registerSchema, type UserData, clerkUserId } from "./registerSchema";
import { sendNewUserAlert } from "../Contact/actions";
import { NewUserAlert } from "@/types/types";
import { auth, } from "@clerk/nextjs/server";



export async function submitUserData(rawData: UserData)
{
    const validateFields = registerSchema.safeParse(rawData);

    if (!rawData) return ({ success: false, message: "No user data recieved." });
    if (!validateFields.success)
    {
        return { success: false, error: "Invaild fields submitted" };
    }

    const result = await auth();
    if(!result.userId) return { success : false, message : "Not signed in."};

    const authUserId = clerkUserId.parse(result.userId);

    if (rawData.userId !== authUserId)
        return { success: false, message: "User id authorized and id recieved do not match. User data not submitted." };

    
    const payload : UserData = { ...rawData, userId :  authUserId};

    const arcInfo = rawData.arcInterest ? "User has registered an ARC profile for you to consider." : "User has not applied for ARC copies.";

    const newUserData: NewUserAlert = {
        email: rawData.email,
        arcInterest: arcInfo

    };

    const query = `*[_type == "User" && userId == $userId][0]._id`;
    const existingId = await sanityWriteClient.fetch<string | null>(query, { userId: authUserId });

    try
    {
        if (existingId)
        {
            // Update existing document - don't include _type as it's immutable
            await sanityWriteClient.patch(existingId).set({
              
                ...payload,
                _updatedAt: new Date().toISOString()
            }).commit();
        } else
        {
            // Create new document
            await sanityWriteClient.create({
                _type: "User",
                ...payload,
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
