import { clerkClient, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";
import { AdminTabs } from "./AdminTabs";
import { updateUserMetadata } from "./actions";

interface ProfileDataNeeded 
{
    arcInterest?: boolean,
    newsLetter?: boolean,
    recievedBooks?: string[],
    genresInterestedIn?:string[],
    arc?: { howLong?:string, confortable? : string}
}
export interface ARCUserInfo
{
    email : string,
    recievedBooks : string[],
    howLong : string
    genresInterestedIn : string[]
    confortable : string
}


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

    const profiles = response.data.map((user) => (
        {   email : user.emailAddresses[0]?.emailAddress ?? "",
            data: user.publicMetadata?.userData as ProfileDataNeeded | undefined
        }

    ))
    
    const arcUsers : ARCUserInfo[] = profiles.filter(({data}) => data &&  data.arcInterest === true).map((user) =>
    ({
        email: user.email,
        howLong: user.data?.arc?.howLong ?? "not defined",
        recievedBooks: user.data?.recievedBooks as string[] ?? [],
        genresInterestedIn: user.data?.genresInterestedIn as [] ?? [],
        confortable : user.data?.arc?.confortable ?? "not defined"
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