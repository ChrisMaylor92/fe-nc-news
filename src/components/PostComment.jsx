import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { postCommentAPI } from "../API";

export const PostComment = ({setComments, article_id}) => {

    const [newComment, setNewComment] = useState("")

    const handleSubmit =((event) => {
        event.preventDefault()
        console.log(newComment)

        postCommentAPI(newComment, article_id).then((result) => {
            console.log(result, 'ressuuulltttt<<<<<')
            setNewComment('')
            setComments((currComments) => {
                return [result, ...currComments]
            })
        })
    })
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newComment" >Add Comment</label>
            <textarea id="" value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
            <button>Add</button>
        </form>
    )
}