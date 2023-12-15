
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../API";
import { ArticleCard } from "./ArticleCard";
import { Error } from "./Error";

export const Article = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    const [apiError, setApiError] = useState(null)
    
    useEffect(() => {
        getArticleById(article_id)
        .then((response) => {
          console.log(response, 'article by id response')
          setArticle(response)
          setLoading(false)
        })
        .catch((err)=> {
            setApiError(err.response)
            setLoading(false)
            setArticle({})
        })
      }, []);

    if (loading) {
        return <div>Loading!</div>;
    } else 
    if (apiError) {
        return <Error message={`${apiError.status} ${apiError.data.msg}`}/>
    }
    return <ArticleCard article={article}/>

}