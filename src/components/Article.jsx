import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../API";
import { Link } from "react-router-dom";

export const Article = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    // const [hasVoted, setHasVoted] = useState(false)

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

    // const handleVote = () => {
    //   if (!hasVoted) {
    //     article.votes = article.votes + 1
    //     setHasVoted(true)
    //   }
    //   if (hasVoted) {
    //     article.votes = article.votes - 1
    //     setHasVoted(false)
    //   }
      
    // }
 

    return <div>
        <h2>{article.title}</h2>
        <div className="article-info">
            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
            {/* <p>Votes: {article.votes}</p>
            <button onClick={handleVote}>Up Vote</button> */}
        </div>
        
        <img className="article-img" src={article.article_img_url}></img>
        <p>{article.body}</p>
        <div>
            <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
        </div>
    </div>
}