"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { UserData } from "../Register/registerSchema";



export async function updateUserMetadata(book: string, recieverEmails: string[]): Promise<void>
{
    const { userId, sessionClaims } = await auth();

    if (!userId)
    {
        throw new Error("Unauthorized");
    }
    const role = sessionClaims?.privileges;

    if (role !== "admin") 
    {
        throw new Error("Unauthorized user");
    }
    try
    {
        const client = await clerkClient();
        const response = await client.users.getUserList();

        for (const user of response.data)
        {
             const currentBooks : string[] = user.publicMetadata?.recievedBooks as string[] | [];
             if(!currentBooks.includes(book))
             {
                const updatedBooks : string[] = [...currentBooks, book];
                // update user metadata
             }

        }

    }
    catch (error)
    {
        console.error("An error accessing clerk users data occured", error);

    }




}