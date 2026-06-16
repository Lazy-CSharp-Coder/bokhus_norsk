import type { AvailabilityProps } from "@/types/booktypes";
const text = "";

export function AvailableIn({ availability, className }: AvailabilityProps)
{
    return (
        <div className={`avalabilityDiv flex ${className}`}>
            <ul className="availabilityList flex">{text}
                {
                    availability.map((item, index) =>
                        <li key={index + "#AV"} className="availabilityItem">
                            {item.toUpperCase()}
                        </li>
                    )
                }
            </ul>
        </div>

    );

}