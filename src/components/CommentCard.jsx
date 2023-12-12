export const CommentCard =(comment) => {
    return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <button onClick={() => {handleVote(comment.comment_id)}}>Up Vote</button>
    </div>>
}