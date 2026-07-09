interface AvailabilityProps 
{
    availability : number[],
    classNameItem? : string,
    fontSize? :string
}

import "./BookAvailableIn.module.css";

export function BookAvailableIn({ availability, classNameItem, fontSize }: AvailabilityProps)
{
    const availabilityTable = ["e-book", "paperback", "hardcover"];
    return (
    
            <ul className="availabilityList flex">
                {
                    availability.map((item, index) =>
                        <li key={index + "#AV"} className={classNameItem ? classNameItem : "availabilityItem"}  style={{fontSize : fontSize ? fontSize :  ""}}>
                            {availabilityTable[item]}
                        </li>
                    )
                }
            </ul>


    );

}