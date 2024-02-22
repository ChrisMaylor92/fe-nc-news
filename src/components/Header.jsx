import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from "../contexts/UserContext";


export const Header = () => {
    const { user } = useContext(UserContext)
    
    return <div >
            <div>
                <Link to={`/`} className='btn btn-primary'>NC News</Link>
                <Link to={`/log_in`} className='btn btn-primary'>Log in menu</Link>
                <p>{user} is logged in</p>
            </div>
            
        </div>
}