import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// const { article_id } = useParams();

const api = axios.create({
    baseURL: "https://chriss-new-app.onrender.com",
  });
export const Article = () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/api/articles/2`).then((response) => {
          console.log(response.data)
          setArticle(response.data.article)
          setLoading(false)
        });
      }, []);

    if (loading) {
        return <div>Loading!</div>;
    }

    return <div>
        <h2>{article.title}</h2>
        <div className="article-info">
            <button>Author: {article.author}</button>
            <button>Topic: {article.topic}</button>
        </div>
        <img className="article-img" src={article.article_img_url}></img>
        <p>{article.body}</p>
        <div>
            <button>Comments {article.comment_count}</button>
        </div>
        
    </div>
}