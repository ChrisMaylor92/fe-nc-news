import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById, patchArticle } from "../API";
import { Link } from "react-router-dom";

export const Article = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    const [hasVoted, setHasVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(article.votes)

    useEffect(() => {
        getArticleById(article_id)
        .then((response) => {
          setArticle(response)
          setLoading(false)
        })
        .catch((err)=> {
            console.log(err, '<<<<')
        })
      }, []);

    if (loading) {
        return <div>Loading!</div>;
    }

    const handleVote = (article_id) => {
      if (!hasVoted) {
        setVoteCount((currCount) => currCount + 1)
        patchArticle(article_id, true)
        .catch((err) => {
          setVoteCount((currCount) => currCount - 1)
          setErr('Something went wrong, please try again.')
        })
        setHasVoted(true)
      }
      if (hasVoted) {
        setVoteCount((currCount) => currCount - 1)
        patchArticle(article_id, false)
        .catch((err) => {
          setVoteCount((currCount) => currCount + 1)
          setErr('Something went wrong, please try again.')
        })
        setHasVoted(false)
      }
      
    }
 

    return <div>
        <h2>{article.title}</h2>
        <div className="article-info">
            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
            <p>Votes: {voteCount}</p>
            <button onClick={()=> handleVote(article.article_id)}>{hasVoted? Remove : Add} Vote</button>
            {err ? <p>{err}</p> : null}
        </div>
        
        <img className="article-img" src={article.article_img_url}></img>
        <p>{article.body}</p>
        <div>
            <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
        </div>
    </div>
}