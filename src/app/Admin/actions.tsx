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

    const client = await clerkClient();
    const response = await client.users.getUserList();

    const arcUsers = response.data.filter((user) => user.publicMetadata?.arcInterest === true).map((user) =>
    ({ 
        email : user.emailAddresses[0]?.emailAddress,
        howLong : user.publicMetadata?.howLong as string,
        recievedBooks : (user.publicMetadata?.recievedBooks as string[]),
        genresInterestedIn : (user.publicMetadata?.genresInterestedIn as string[])
    }));

    const newsLetterEmails = response.data.filter((user) => user.publicMetadata?.newsLetter === true).map((user) => user.emailAddresses[0]?.emailAddress)
    

    
    return  { success : true}

    
    


}