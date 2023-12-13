
import { ArticleCard } from "./ArticleCard";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../API";
import { Collapsible } from "./Collapsible";
import { ArticleComments } from "./ArticleComments";
export const Article = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true);
    

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
    return <ArticleCard article={article}/>

}