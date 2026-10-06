import { clerkClient, auth } from "@clerk/nextjs/server";
import { client } from "@/sanity/client";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";
import { AdminTabs } from "./AdminTabs";
import { updateUserMetadata } from "./actions";
import { Book } from "@/types/booktypes";

interface ProfileDataNeeded 
{
    userName : string,
    arcInterest?: boolean,
    newsLetter?: boolean,
    recievedBooks?: string[],
    genresInterestedIn?:string[],
    preferredLanguage : string,
    shouldNotReciveARCAnymore: boolean,
    arc?: { howLong?:string, comfortable? : string, format : string, rules : { reminder : boolean}}
}
export interface ARCUserInfo
{
    email : string,
    userName : string,
    recievedBooks : string[],
    howLong : string
    genresInterestedIn : string[]
    comfortable : string,
    format : string,
    reminder: boolean
    
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

    const cclient = await clerkClient();
    const response = await cclient.users.getUserList();

    const profiles = response.data.map((user) => (
        {   email : user.emailAddresses[0]?.emailAddress ?? "",
            data: user.publicMetadata?.userData as ProfileDataNeeded | undefined
        }

    ))
    
    const arcUsers : ARCUserInfo[] = profiles.filter(({data}) => data &&  data.arcInterest === true && data.arc).map((user) =>
    ({
        email: user.email,
        userName : user.data?.userName ?? "NONAME",
        howLong: user.data?.arc?.howLong ?? "not defined",
        recievedBooks: user.data?.recievedBooks as string[] ?? [],
        genresInterestedIn: user.data?.genresInterestedIn as [] ?? [],
        comfortable : user.data?.arc?.comfortable ?? "not defined",
        preferredLanguage :  user.data?.preferredLanguage,
        shouldNotReciveARCAnymore : user.data?.shouldNotReciveARCAnymore,
        format : user.data?.arc?.format ?? "ePub",
        reminder : user.data?.arc?.rules.reminder ?? false
    }));
    const BOOK_QUERY = `*[_type == "Book"] | order(bookTitle asc)`;
         let bookList: Book[] = [];
    
       try
       {
          
          bookList = await client.fetch<Book[]>(BOOK_QUERY);
       }
       catch (error)
       {
          console.error("Sanity fetch failed :", error);
          throw new Error("Failed to fetch authors from Sanity");
       }

    const bookNameArray : string[] = bookList.length < 1 ? [] : bookList.map((book) => book.bookTitle);

    const newsLetterEmails : string[] = profiles.filter((user) => user.data && user.data.newsLetter == true).map((user) => user.email);

    return (
        <main className={`${styles.adminPage}`}>
            <div className={styles.backgroundAdminPage}>
                <BokHusCom fontSize="14rem" />
            </div>

            <AdminTabs newsLetterEmails={newsLetterEmails} arcUsers={arcUsers} booksInDatabase={bookNameArray}/>

        </main>

    );

}