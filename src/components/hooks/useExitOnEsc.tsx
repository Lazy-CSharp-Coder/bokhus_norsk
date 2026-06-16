import { useEffect } from "react"
export function useExitOnEsc(myCallback : () => void)
{
    useEffect(() =>
    {
        const handleKeyPress = (event:KeyboardEvent) =>
        {
            if(event.key == "Escape")
                {
                    event.preventDefault();   // prevent default for Esc
                    myCallback();  // call whatever happens when esc is pressed;
                }
            
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => removeEventListener("keydown", handleKeyPress);

    }, [myCallback])
}