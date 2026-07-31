"use server";

import { auth, clerkClient} from "@clerk/nextjs/server";
import { client } from "@/sanity/client";

import { redirect } from "next/navigation";



export async function deleteSanityProfile(): Promise<void>
{
    const { userId } = await auth();

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

        const client = await clerkClient();
        await client.users.deleteUser(userId);


    }
    catch (error)
    {
        console.error("Clerk user deletion error : ", error);
        throw new Error("Failed to delete Clerk account. Please try again later.");
    }
}

export async function handleDelete (formData: FormData): Promise<void> 
{


    try
    {
        const profile = formData.get("profile") === "on";
        const clerk = formData.get("clerk") ===  "on";
        if (profile) await deleteSanityProfile();
        if (clerk) {

            await deleteClerkUser(); 
            redirect("/");
         
        }

    }
    catch (error)
    {
        console.error("Deletion error :", error);
        throw new Error("Failed to delete. Try again later");
    }


};