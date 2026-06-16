import { client } from "@/sanity/client";
import { Review } from "@/types/reviewtypes";

export async function getReviews(bookId : string) : Promise<Review[]>
 {
        try 
        {
            const array: Review[] = await  client.fetch<Review[]>(`*[_type == "Review" && bookRef._ref == $bookId]`, { bookId: bookId }); 
            if(!array) throw new Error("No data found");
            return array;
        }
        catch(error)
        {
            console.error("Failed to get reviews : ", error)
            throw new Error("Failed fetch from Sanity")    ;
        }
        

 }