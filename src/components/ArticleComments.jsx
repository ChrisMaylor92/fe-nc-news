import { useEffect,useState } from "react"
import { getCommentsByArticleId } from "../API"
import { CommentCard } from "./CommentCard";
import { Collapsible } from "./Collapsible";

export const ArticleComments = ({article}) => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(article.article_id)
        .then((result) => {
            setComments(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <div>Loading!</div>;
    }
    if (comments.length === 0) {
        return <h2>Comments: 0</h2>
    }
    return <div>
        <h2>Comments: {comments.length}</h2>
        <Collapsible>
        {comments.map((comment) => {
            return <div key={comment.comment_id}>
                <CommentCard comment={comment} setComments={setComments}/>
            </div>
        })}
        </Collapsible>
    </div>
}