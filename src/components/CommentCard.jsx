import { deleteComment, patchComment } from "../API"
import { useState } from "react"
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export const CommentCard =({comment, setComments}) => {
    const { user } = useContext(UserContext)
    const [hasVoted, setHasVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(comment.votes)
    const [err, setErr] = useState(null)

    const handleVote = () => {
        if (!hasVoted) {
            setVoteCount((currCount) => currCount + 1)
            patchComment(comment.comment_id, 1).then(() => {
                setErr(null)
            })
            .catch((err) => {
                setVoteCount((currCount) => currCount - 1)
                setErr('Something went wrong, please try again.')
            })
            setHasVoted(true)
        }
        if(hasVoted) {
            setVoteCount((currCount) => currCount - 1)
            patchComment(comment.comment_id, -1).then(() => {
                setErr(null)
            })
            .catch((err) => {
                setVoteCount((currCount) => currCount + 1)
                setErr('Something went wrong, please try again.')
            })
            setHasVoted(false)
        }
        
    }

    const handleDelete = () => {

        setComments((currComments) => {
            const copyComments = [...currComments]
            return copyComments.filter((element) => element.comment_id !== comment.comment_id)
        })
        deleteComment(comment.comment_id)
        .then(() => {
            setErr(null)
        })
        .catch((err) => {
            setComments((currComments) => {
                return [comment, ...currComments]
            })
            setErr('Something went wrong, please try again.')
        })
    }

    if (user === comment.author) {
        return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {voteCount}</p>
        <button onClick={handleDelete}>Delete Comment</button>
        {err ? <p>{err}</p> : null}
    </div>
    }
    return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {voteCount}</p>
        <button onClick={handleVote}>{hasVoted? "Remove" : "Add"} Vote</button>
        {err ? <p>{err}</p> : null}
    </div>
}