
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles, getAllArticlesPagnated } from "../API";



export const Home = () => {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [pageNumber ,setPageNumber] = useState(1)


    useEffect(() =>{
        getAllArticles()
        .then((response) => {
            setAllArticles(response)
        })
    }, [])

    useEffect(() =>{
        getAllArticlesPagnated(pageNumber)
        .then((response) => {
            setArticles(response)
            setLoading(false);
        })
    }, [pageNumber])

    if(loading) {
        return <div>Loading!</div>
    }
    const nextPage = () => {
        setPageNumber( pageNumber+1 )
    }
    const previousPage = () => {
        setPageNumber( pageNumber-1 )
    }
// need to refactor everything below  
    if (allArticles.length <= 5) {
        return <div className="home">
        <h3>Articles</h3>
        <h3>Sort By Topics/Authors</h3>
        <Link to={`/articles/post`}>Post New Article</Link>
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className="article-list-item">
                    <div className="article-li-title-info">
                        <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                        <div className="article-list-item-info">
                            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
                            <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
                            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
                        </div>
                    </div>
                    <img className="article-list-img"src={article.article_img_url}></img>
                </li>
            })}
        </ul>
    </div>
    }
    if(pageNumber === 1) {
        return <div className="home">
        <h3>Articles</h3>
        <h3>Sort By Topics/Authors</h3>
        <Link to={`/articles/post`}>Post New Article</Link>
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className="article-list-item">
                    <div className="article-li-title-info">
                        <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                        <div className="article-list-item-info">
                            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
                            <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
                            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
                        </div>
                    </div>
                    <img className="article-list-img"src={article.article_img_url}></img>
                </li>
            })}
        </ul>
        
        <div className="bottom">
        <button onClick={nextPage}>Next Page</button>
        </div>
    </div>
    }

    const remainder = allArticles.length % 5
    const listNoRemainder = allArticles.length - remainder
    const fullPages = listNoRemainder / 5



    if (remainder === 0 && pageNumber === fullPages) {
                return <div className="home">
                <h2>Articles</h2>
                <h3>Sort By Topics/Authors</h3>
                <Link to={`/articles/post`}>Post New Article</Link>
                <ul>
                    {articles.map((article) => {
                        return <li key={article.article_id} className="article-list-item">
                            <div className="article-li-title-info">
                                <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                                <div className="article-list-item-info">
                                    <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
                                    <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
                                    <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
                                </div>
                            </div>
                            <img className="article-list-img"src={article.article_img_url}></img>
                        </li>
                    })}
                </ul>
                <div className="bottom">
                <button onClick={previousPage}>Previous Page</button>
                </div>
            </div>
        }
        if (remainder > 0 && pageNumber === fullPages + 1) {
            return <div className="home">
            <h2>Articles</h2>
            <h3>Sort By Topics/Authors</h3>
            <Link to={`/articles/post`}>Post New Article</Link>
            <ul>
                {articles.map((article) => {
                    return <li key={article.article_id} className="article-list-item">
                        <div className="article-li-title-info">
                            <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                            <div className="article-list-item-info">
                                <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
                                <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
                                <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
                            </div>
                        </div>
                        <img className="article-list-img"src={article.article_img_url}></img>
                    </li>
                })}
            </ul>
            <div className="bottom">
            <button onClick={previousPage}>Previous Page</button>
            </div>
        </div>
    }
    
    return <div className="home">
        <h2>Articles</h2>
        <h3>Sort By Topics/Authors</h3>
        <Link to={`/articles/post`}>Post New Article</Link>
        <ul>
            {articles.map((article) => {
                return <li key={article.article_id} className="article-list-item">
                    <div className="article-li-title-info">
                        <Link  to={`/articles/${article.article_id}`}>{article.title}</Link>
                        <div className="article-list-item-info">
                            <Link to={`/articles/topics/${article.topic}`}>Topic: {article.topic}</Link>
                            <Link to={`/articles/${article.article_id}/comments`}>Comments {article.comment_count}</Link>
                            <Link to={`/articles/authors/${article.author}`}>Author: {article.author}</Link>
                        </div>
                    </div>
                    <img className="article-list-img"src={article.article_img_url}></img>
                </li>
            })}
        </ul>
        <div className="bottom">
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
        </div>
    </div>
}


