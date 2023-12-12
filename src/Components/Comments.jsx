import { useEffect } from "react"
import { getCommentsByArticleId } from "../API"


export const Comments = () => {
    const [comments, setComments] = useState([])


    useEffect(() => {
        getCommentsByArticleId(2)//use params
        .then((result) => {
            setComments(result)
        })
    }, [])

    return <div>
        <h1>Article Title</h1>
        <h1>Comments</h1>
        {comments.map((comment) => {
            return <div>
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                <button>Up Vote</button>
                <button>Down Vote</button>
            </div>
        })}
        <button>Post a Comment</button>
    </div>
}