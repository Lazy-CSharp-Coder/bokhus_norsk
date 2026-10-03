import { clerkClient, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";
import { AdminTabs } from "./AdminTabs";
import { updateUserMetadata } from "./actions";


export default async function AdminPage()
{
    const { userId, sessionClaims } = await auth();

    if (!userId)
    {
        console.log("Not authorized.");
    }
    const role = sessionClaims?.privileges;

    if (role !== "admin") 
    {

        console.log("Not authorized : User is not admin.");
        redirect("/");
    }

    const client = await clerkClient();
    const response = await client.users.getUserList();

    const arcUsers = response.data.filter((user) => user.publicMetadata?.arcInterest === true).map((user) =>
    ({
        email: user.emailAddresses[0]?.emailAddress,
        howLong: user.publicMetadata?.howLong as string,
        recievedBooks: (user.publicMetadata?.recievedBooks as string[]),
        genresInterestedIn: (user.publicMetadata?.genresInterestedIn as string[])
    }));

    const newsLetterEmails = response.data.filter((user) => user.publicMetadata?.newsLetter === true).map((user) => user.emailAddresses[0]?.emailAddress);


    return (
        <main className={`${styles.adminPage}`}>
            <div className={styles.backgroundAdminPage}>
                <BokHusCom fontSize="14rem" />
            </div>

            <AdminTabs newsLetterEmails={newsLetterEmails} arcUsers={arcUsers} updateUsersARCBook={updateUserMetadata} />

        </main>

    );

}