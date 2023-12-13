import { patchComment } from "../API"
import { useState } from "react"

export const CommentCard =({comment}) => {
    const [hasVoted, setHasVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(comment.votes)
    const [err, setErr] = useState(null)

    const handleVote = () => {
        if (!hasVoted) {
            setVoteCount((currCount) => currCount + 1)
            patchComment(comment.comment_id, true)
            .catch((err) => {
                setVoteCount((currCount) => currCount - 1)
                setErr('Something went wrong, please try again.')
            })
            setHasVoted(true)
        }
        if(hasVoted) {
            setVoteCount((currCount) => currCount - 1)
            patchComment(comment.comment_id, false)
            .catch((err) => {
                setVoteCount((currCount) => currCount + 1)
                setErr('Something went wrong, please try again.')
            })
            setHasVoted(false)
        }
        
    }
    
    return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {voteCount}</p>
        <button onClick={handleVote}>{hasVoted? "Remove" : "Add"} Vote</button>
        {err ? <p>{err}</p> : null}
    </div>
}