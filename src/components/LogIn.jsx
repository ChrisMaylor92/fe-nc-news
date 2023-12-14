import { useState, useEffect } from "react";
import { getUsers } from "../API";
import { UserCard } from "./UserCard";

export const LogIn = () => {
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getUsers()
        .then((result) => {
            setUserList(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading!</div>;
    }

    return <div>
            <h2>Log in </h2>
            <h3>select a user from the list below</h3>

            <ul>
                {userList.map((user) => {
                    return <li key={user.username}>
                        <UserCard user={user}/>
                    </li>
                    
                })}

            </ul>
            
        </div>
}