import { patchComment } from "../API"
import { useState } from "react"

export const CommentCard =({comment, setComments}) => {
    const [hasVoted, setHasVoted] = useState(false)

    const handleVote = (comment_id) => {
        if (!hasVoted) {
            patchComment(comment.comment_id, true)
            setComments((currComments) => {
                const updatedComments = currComments.map((comment) => {
                    if(comment.comment_id === comment_id){
                        return {...comment, votes: comment.votes + 1}
                    }
                    return comment
                })
                return updatedComments
            })
            setHasVoted(true)
        }
        if(hasVoted) {
            patchComment(comment.comment_id, false)
            setComments((currComments) => {
                const updatedComments = currComments.map((comment) => {
                    if(comment.comment_id === comment_id){
                        return {...comment, votes: comment.votes - 1}
                    }
                    return comment
                })
                return updatedComments
            })
            setHasVoted(false)
        }
        
    }
    
    return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <button onClick={() => handleVote(comment.comment_id)}>Up Vote</button>
    </div>
}