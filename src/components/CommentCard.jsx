
export const CommentCard =({comment, setComments}) => {


    return <div>
        <p>{comment.body}</p>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <button>Up Vote</button>
    </div>
}