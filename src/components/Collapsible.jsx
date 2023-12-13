import { useState } from "react"

export const Collapsible = ({children}) => {
    const [isHidden, setIsHidden] = useState(true)
    const toggleIsHidden = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div>
            <button onClick={toggleIsHidden}>{isHidden? "Show" : "Hide"} Comments</button>
            {isHidden? null : children}
        </div>
    )
}