import styles from  "./ByAuthor.module.css";
export function ByAuthor({ authors }: { authors: string[]; })
{
   
    return (<p className={styles.authorsSeparator}>
        {
            authors.length > 1 ? authors.map((item, index, array) =>
                <span key={item + index} className={styles.authorNameText}> {item}
                    <span className={styles.authorsSeparator}>
                        {index < array.length - 1 ? ", " : "and "}</span>
                    {index == array.length - 1}</span>) : <span className={styles.authorNameText}> {authors[0]}</span>
        }
    </p>);
}
