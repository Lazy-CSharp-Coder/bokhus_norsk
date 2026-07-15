import "./ByAuthor.module.css";
export function ByAuthor({ authors }: { authors: string[]; })
{
    console.log("lengde array : " + authors.length);
    return (<p className="authorsSeparator">by
        {
            authors.length > 1 ? authors.map((item, index, array) =>
                <span key={item + index} className="authorNameText"> {item}
                    <span className="authorsSeparator">
                        {index < array.length - 1 ? ", " : "and "}</span>
                    {index == array.length - 1 && "."}</span>) : <span className="authorNameText"> {authors[0]}</span>
        }
    </p>);
}
