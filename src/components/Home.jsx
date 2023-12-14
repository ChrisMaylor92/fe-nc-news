
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles, getAllArticlesPagnated, getTopics } from "../API";
import { Collapsible } from "./Collapsible";



export const Home = () => {
    const [articles, setArticles] = useState([])
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true);
    const [pageNumber ,setPageNumber] = useState(1)
    const [topics, setTopics] = useState([])


    useEffect(() =>{
        getAllArticles()
        .then((response) => {
            setArticles(response)
            setLoading(false)
        })
    }, [])

    useEffect(() =>{
        getTopics()
        .then((response) => {
            setTopics(response)
        })
    }, [])

    if(loading) {
        return <div>Loading!</div>
    }
    // const nextPage = () => {
    //     setPageNumber( pageNumber+1 )
    // }
    // const previousPage = () => {
    //     setPageNumber( pageNumber-1 )
    // }


    // const remainder = allArticles.length % 5
    // const listNoRemainder = allArticles.length - remainder
    // const fullPages = listNoRemainder / 5

    return <div className="home">
    <h2>Articles</h2>
    <p>Filter by topics:</p>
    <Collapsible name="Topics">
        <ul>
            {topics.map((topic) => {
                return <li key={topic.slug}>
                    <Link  to={`/articles/topics/${topic.slug}`}>{topic.slug}</Link>
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
    {/* <div>
        {allArticles.length <= 5 || pageNumber === 1 ? null : <button onClick={previousPage}>Previous Page</button>}
        {allArticles.length <= 5 || remainder === 0 && pageNumber === fullPages || remainder > 0 && pageNumber === fullPages + 1 ? null : <button onClick={nextPage}>Next Page</button>}
    </div> */}
    
    </div>

}


<form onSubmit={handleSubmit} id="sortbyDropDown">
        <div>
          <label htmlFor="sort-by">Sort by...</label>
          <div>
            <select id="sort-by" name="sort-by">
              <option disabled>Sort by...</option>
              {categories.map((category) => {
                return (
                  <option
                    key={category.category_name}
                    value={category.category_name}
                  >
                    {category.category_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div id="button-container">
          <button id="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>










