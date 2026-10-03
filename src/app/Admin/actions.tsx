"use server"

import { auth, clerkClient} from "@clerk/nextjs/server";
import { success } from "zod";


export async function updateUserMetadata(book: string, recieverEmails : string[]) : Promise<void>
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

    
    
    // return  { success : true}

    
    


}