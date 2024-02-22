import { Link } from "react-router-dom";

export const HomeArticleCard = ({article}) => {
    console.log(article)
    return <>
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={article.article_img_url}/></figure>
            <div className="card-body">
                <Link to={`/articles/${article.article_id}`} className="card-title">{article.title}</Link>
                <p>Author: <Link to={`/articles/authors/${article.author}`}>{article.author}</Link></p>
                <p>Topic: <Link to={`/articles/topics/${article.topic}`}>{article.topic}</Link></p>
                <p>{article.comment_count} Comments </p>
                //add 'Posted: and the date by splitting what you have at T'
            </div>
        </div>
    </>
    
    
}