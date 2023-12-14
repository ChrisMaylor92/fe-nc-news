import { useState } from "react"

export const Collapsible = ({children, name}) => {
    const [isHidden, setIsHidden] = useState(true)
    const toggleIsHidden = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div>
            <button onClick={toggleIsHidden}>{isHidden? "Show" : "Hide"} {name}</button>
            {isHidden? null : children}
        </div>
    )
}