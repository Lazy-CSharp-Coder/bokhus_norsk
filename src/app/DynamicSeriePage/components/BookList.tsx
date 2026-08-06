import { BookListItem } from "./BookListItem";
import type { BookListProps, Book } from "@/types/booktypes";
import { urlFor } from "@/functions/urlFor";
import "./BookList.module.css";

export function BookList({ bookList, handleClick }: BookListProps)
{   
      

    return (

        <ul className="bookList flex">
            {
                bookList.map((item, index) =>
                    // <BookListItem key={item.uid} item={item}  />
                    <BookListItem key={item._id + "#list#"} imageUrl={urlFor(item.imageBook, 150)} itemNumber={index} handleClick={handleClick} />

                )}

        </ul>);
}
