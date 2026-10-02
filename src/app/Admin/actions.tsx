"use server"

import { auth, clerkClient} from "@clerk/nextjs/server";
import { success } from "zod";


async function updateUserMetadata(book: string, recieverEmails : string[]) 
{
    const { userId, sessionClaims} = await auth();

    if(!userId)
    {
        throw new Error ("Unauthorized");
    }
    const role = sessionClaims?.privileges;

    if(role !== "admin") 
    {
        throw new Error("Unauthorized user");
    }

    const clients = await clerkClient();
    



    return  { success : true}

    
    


}