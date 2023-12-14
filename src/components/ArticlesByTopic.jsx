
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllArticlesFiltered, getTopics } from "../API";
import { Collapsible } from "./Collapsible";



export const ArticlesByTopic = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [topics, setTopics] = useState([])

    useEffect(() =>{
        getAllArticlesFiltered(topic)
        .then((response) => {
            setArticles(response)
            setLoading(false)
        })
    }, [topic])
    useEffect(() =>{
        getTopics()
        .then((response) => {
            setTopics(response)
        })
    }, [])
  
    if(loading) {
        return <div>Loading!</div>
    }
 

    return <div className="home">
    <h2>Articles</h2>
    <h3>Filtered by topic: {topic}</h3>
    <p>Other topics:</p>
    <Collapsible name="Topics">
        <ul>
            {topics.map((menuTopic) => {
                return <li key={menuTopic.slug}>
                    <Link  to={`/articles/topics/${menuTopic.slug}`}>{menuTopic.slug}</Link>
                </li>
            })}
            
        </ul>
    </Collapsible>
    <Link to={`/articles/post`}>Post New Article</Link>
    <ul>
        {articles.map((article) => {
            return <li key={article.article_id} className="article-list-item">
                <div className="article-li-title-info">
                    <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                    <div className="article-list-item-info">
                        <p>Author: <Link to={`/articles/authors/${article.author}`}>{article.author}</Link></p>
                        <p>Topic: <Link to={`/articles/topics/${article.topic}`}>{article.topic}</Link></p>
                        <p>{article.comment_count} Comments </p>
                
                        
                        
                    </div>
                </div>
                <img className="article-list-img"src={article.article_img_url}></img>
            </li>
        })}
    </ul>
    </div>

}











