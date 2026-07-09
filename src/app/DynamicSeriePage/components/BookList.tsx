import { BookListItem } from "../../../components/books/BookListItem";
import type { BookListProps } from "@/types/booktypes";
import "./BookList.module.css";

export function BookList({ bookList, handleClick }: BookListProps)
{
    return (

        <ul className="bookList flex">
            {
                bookList.map((item) =>
                    // <BookListItem key={item.uid} item={item}  />
                    <BookListItem key={item._id + "#list#"} item={item} handleClick={handleClick} />

                )}

        </ul>);
}
