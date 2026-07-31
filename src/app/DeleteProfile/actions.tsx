"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { sanityWriteClient } from "@/sanity/client";

import { redirect } from "next/navigation";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useClerk } from "@clerk/nextjs";
import { cookies } from "next/headers";



export async function deleteSanityProfile(): Promise<void>
{
    const { userId } = await auth();
    const client = sanityWriteClient;
    if (!userId)
    {
        throw new Error("Unauthorized : No active user session found");
    }

    try
    {
        const USER_QUERY = `*[_type == "User" && userId == $clerkUserId][0]._id`;
        const documentId = await client.fetch(USER_QUERY, { clerkUserId: userId });
        console.log("Document id :" + documentId);

        if (documentId)
        {
            await client.delete(documentId);
        }




    }
    catch (error)
    {

        console.error("Sainty deletion error", error);
        throw new Error("Failed to delete profile in Sanity database. Please try again later.");
    }

}

export async function deleteClerkUser(): Promise<void>
{
    try
    {
        const { userId } = await auth();

        if (!userId)
        {
            throw new Error("Unauthorized : No active user session found");
        }
        console.log("here I am");
        const client = await clerkClient();
        await client.users.deleteUser(userId);
        const cookieStore = cookies();
        (await cookieStore).delete("__session");
        (await cookieStore).delete("__client_uat")
    

    }
    catch (error)
    {
        if (isClerkAPIResponseError(error))
        {
            const isNotFound = error.errors.some(e => e.code === "resource_not_found");
            if (isNotFound) 
            {
                console.log("User already deleted. (strict mode double)");
                const cookieStore = await cookies();
                cookieStore.delete("__session");
                cookieStore.delete("__client_uat");

            }

        }
        console.error("Clerk user deletion error : ", error);
        throw new Error("Failed to delete Clerk account. Please try again later.");
    }
}

export async function handleDelete(formData: FormData): Promise<void> 
{

  
    try
    {
        const profile = formData.get("profile") === "on";
        const clerk = formData.get("clerk") === "on";
        if (profile) await deleteSanityProfile();
        if (clerk)
        {

            await deleteClerkUser();
       

        }

    }
    catch (error)
    {

        console.error("Deletion error :", error);
        throw new Error("Failed to delete. Try again later");
    }


};