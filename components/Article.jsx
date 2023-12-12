
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../src/API";
// const { article_id } = useParams();


export const Article = () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    const [hasVotedUp, setHasVotedUp] = (false)
    const [hasVotedDown, setHasVotedDown] = (false)

    useEffect(() => {
        getArticleById(2)//use the params here 
        .then((response) => {
          setArticle(response)
          setLoading(false)
        });
      }, []);

    if (loading) {
        return <div>Loading!</div>;
    }

    const handleUpVote = () => {
      if (!hasVotedUp) {
        article.votes = article.votes + 1
        setHasVotedUp(true)
      }
      if (hasVotedUp) {
        article.votes = article.votes - 1
        setHasVotedUp(false)
      }
      
    }
    const handleDownVote = () => {
      if (!hasVotedDown) {
        article.votes = article.votes - 1
        setHasVotedDown(true)
      }
      if (hasVotedUp) {
        article.votes = article.votes + 1
        setHasVotedDown(false)
      }
    }

    return <div>
        <h2>{article.title}</h2>
        <div className="article-info">
            <button>Author: {article.author}</button>
            <button>Topic: {article.topic}</button>
            <p>Votes: {article.votes}</p>
        </div>
        <button onClick={handleUpVote}>Up Vote</button>
        <button onClick={handleDownVote}>Down Vote</button>
        <img className="article-img" src={article.article_img_url}></img>
        <p>{article.body}</p>
        <div>
            <button>Comments {article.comment_count}</button>
        </div>
        
    </div>
}