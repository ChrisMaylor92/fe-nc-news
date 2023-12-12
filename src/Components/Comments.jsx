import { useEffect,useState } from "react"
import { getArticleById, getCommentsByArticleId } from "../API"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export const ArticleComments = () => {

    const [comments, setComments] = useState([])
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    const [hasVoted, setHasVoted] = useState(false)
    const { article_id } = useParams();

    useEffect(() => {
        getCommentsByArticleId(article_id)
        .then((result) => {
            setComments(result)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        getArticleById(article_id)
        .then((response) => {
          setArticle(response)
        })
        .catch((err)=> {
            console.log(err, '<<<<')
        })
    }, []);

    if (loading) {
        return <div>Loading!</div>;
    }


    return <div>
        <h2>{article.title}</h2>
        <h2>Comments</h2>
        {comments.map((comment) => {
            return <div key={comment.comment_id}>
                <CommentCard comment={comment}/>
            </div>
        })}
        <button>Post a Comment</button>
    </div>
}