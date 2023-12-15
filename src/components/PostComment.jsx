import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { postCommentAPI } from "../API";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const PostComment = ({setComments, article_id}) => {
    const { user } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
 

    const handleSubmit =((event) => {
        event.preventDefault()

        postCommentAPI(newComment, article_id, user)
        .then((result) => {
            setComments((currComments) => {
                return [result.newComment, ...currComments]
            })
            setNewComment('')
        })
    })

    if (user ==="Nobody") {
        return <h2>Please log in to add a comment</h2>
    }
 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newComment" >Add Comment</label>
            <textarea id="newComment" value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
            { newComment.length > 50 ?  <p className="error">Error: *50 char max.</p> : <p>*50 char max.</p>}
            <button disabled={ newComment.length > 50 || newComment.length === 0} type="submit">Add</button>
        </form>
    )
}