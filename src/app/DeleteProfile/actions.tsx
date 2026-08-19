"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { sanityWriteClient } from "@/sanity/client";

import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { cookies } from "next/headers";
import { publicDecrypt } from "crypto";
import { revalidatePath } from "next/cache";



export async function deleteSanityProfile(): Promise<void>
{
    const { userId } = await auth();
    const client = await clerkClient();
    if (!userId)
    {
        throw new Error("Unauthorized : No active user session found");
    }

    try
    {              
            await client.users.updateUserMetadata(userId, 
                {
                    publicMetadata: {
                        userData : null
                    }
                }

            );
            revalidatePath("/");
    }

    
    catch (error)
    {

        console.error("Clerk metadata deletion error", error);
        throw new Error("Failed to delete profile in Clerk. Please try again later.");
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
        // const cookieStore = cookies();
        // (await cookieStore).delete("__session");
        // (await cookieStore).delete("__client_uat")
    

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