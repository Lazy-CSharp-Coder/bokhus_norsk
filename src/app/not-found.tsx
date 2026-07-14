import Link from "next/link"

export default function PageNotFound() 
{
    return ( 
        <div className="notFoundPageDiv">
    <h2>Page not found.</h2>
            <p>Requested page wa not found</p>
            <Link href="/">Go to Home page</Link>
            </div>


    )
}