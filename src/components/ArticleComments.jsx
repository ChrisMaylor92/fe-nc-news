import { useEffect,useState } from "react"
import { getArticleById, getCommentsByArticleId } from "../API"
import { useParams, Link } from "react-router-dom";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";

export const ArticleComments = () => {

    const [comments, setComments] = useState([])
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    
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
        <PostComment setComments={setComments} article_id={article_id}/>
        {comments.map((comment) => {
            return <div key={comment.comment_id}>
                <CommentCard comment={comment} setComments={setComments}/>
            </div>
        })}
        
    </div>
}