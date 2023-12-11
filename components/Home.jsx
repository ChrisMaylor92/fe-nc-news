import axios from "axios";
import { useEffect, useState } from "react";


const api = axios.create({
  baseURL: "https://chriss-new-app.onrender.com",
});



export const Home = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        api.get('/api/articles')
        .then((response) => {
            console.log(response.data.articles)
            setArticles(response.data.articles)
            setLoading(false);
        })
    }, [])
    if(loading) {
        return <div>Loading!</div>
    }

    return <div className="home">
        <h2>Articles</h2>
        <h3>Sort By Topics/Authors</h3>
        
        <ul>
            {articles.map((article) => {
                return <li className="article-list-item">
                    <div className="article-li-title-info">
                        <h4>{article.title}</h4>
                        <div className="aritcle-list-item-info">
                            <button>Topic: {article.topic}</button>
                            <button>Comments {article.comment_count}</button>
                            <button>Author: {article.author}</button>
                        </div>
                    </div>
                    <img className="article-list-img"src={article.article_img_url}></img>
                </li>
            })}
        </ul>
        <button>Post New Article</button>
    </div>
}