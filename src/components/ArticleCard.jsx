import { patchArticle } from "../API"
import { useState } from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({article}) => {
    console.log(article)
    const [hasVoted, setHasVoted] = useState(false)
    const [voteCount, setVoteCount] = useState(article.votes)
    const [err, setErr] = useState(null)

    const handleVote = () => {
        if (!hasVoted) {
          setVoteCount((currCount) => currCount + 1)
          patchArticle(article.article_id, 1)
          .catch((err) => {
            setVoteCount((currCount) => currCount - 1)
            setErr('Something went wrong, please try again.')
          })
          setHasVoted(true)
        }
        if (hasVoted) {
          setVoteCount((currCount) => currCount - 1)
          patchArticle(article.article_id, -1)
          .catch((err) => {
            setVoteCount((currCount) => currCount + 1)
            setErr('Something went wrong, please try again.')
          })
          setHasVoted(false)
        }
    }
   
    return (
        <div>
        <h2>{article.title}</h2>
        <div className="article-info">
            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
            <p>Votes: {voteCount}</p>
            <button onClick={handleVote}>{hasVoted? "Remove" : "Add"} Vote</button>
            {err ? <p>{err}</p> : null}
        </div>
        
        <img className="article-img" src={article.article_img_url}></img>
        <p>{article.body}</p>
    </div>
    )
}