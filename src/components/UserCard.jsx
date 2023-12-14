import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const UserCard = ({user}) => {
    const { setUser } = useContext(UserContext)

    const handleAvatarClick = (username) => {
        setUser(username)
    }

    return <div>
        <img className="log-in-user-img"src={user.avatar_url} onClick={() => {
            handleAvatarClick(user.username)
        }}/>
        <p>{user.username}</p>
    </div>
}