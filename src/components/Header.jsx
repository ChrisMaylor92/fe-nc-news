import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";


export const Header = () => {
    const { user } = useContext(UserContext)
    
    return <div className="header">
            <Link to={`/`} >NC News</Link>
            <Link to={`/log_in`} >Log in menu</Link>
            <p>{user} is logged in</p>
        </div>
}