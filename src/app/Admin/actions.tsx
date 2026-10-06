"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUserMetadata(book: string, recieverEmails: string[]): Promise<{ success : boolean, error? : string}>
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
                console.log("should update user " );
                // update user metadata
                await client.users.updateUserMetadata(user.id, 
                    {
                        publicMetadata : {

                            ...user.publicMetadata,
                            recievedBooks : updatedBooks
                        }

                })
             }

        }
        return { success : true}

    }
    catch (error)
    {
        console.error("An error accessing clerk users data occured", error);
        return  { success: false, error : "Failed to update users with sendout"}
    }




}