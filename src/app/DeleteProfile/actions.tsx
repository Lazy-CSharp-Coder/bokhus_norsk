"use server";

import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { client } from "@/sanity/client";


export async function deleteSanityProfile(clerkUserIdToDelete: string)
{
    try {
        const USER_QUERY = `*[_type == "profile" && userId : $clerkUserId][0]._id]`;
        const documentId = await client.fetch(USER_QUERY, {clerkUserId : clerkUserIdToDelete} )

        if(documentId) {
            await client.delete(documentId);
        }
        return { success : true}


    }   
    catch(error)  {

        console.error("Sainty deletion error", error)
        throw new Error("Failed to delete profile in Sanity database. Please try again later.")
    }

}

export async function deleteClerkUser() : Promise<void>
{
    try {
        const { userId } = await auth();

        if(!userId) {
            throw new Error("Unauthorized : No active user session found");
        }

        const client = await clerkClient();
        await client.users.deleteUser(userId);
    
        
    }
    catch(error)
    {
        console.error("Clerk user deletion error : ", error);
        throw new Error("Failed to delete Clerk account. Please try again later.")
    }
}