
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles, getAllArticlesPagnated, getTopics } from "../API";
import { Collapsible } from "./Collapsible";
import { SortBy } from "./SortBy";
import { Title } from "./Title";
import { HomeArticleCard } from "./HomeArticleCard";



export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const [topics, setTopics] = useState([])
    const [allArticles, setAllArticles] = useState([])
    const [pageNumber ,setPageNumber] = useState(1)
    


    useEffect(() =>{
        getAllArticles()
        .then((response) => {
            setAllArticles(response)
            setLoading(false)
        })
        getAllArticlesPagnated(pageNumber)
        .then((response)=>{
            setArticles(response)
        })
    }, [pageNumber])

    useEffect(() =>{
        getTopics()
        .then((response) => {
            setTopics(response)
        })
    }, [])

    if(loading) {
        return <div>Loading!</div>
    }
    const nextPage = () => {
        setPageNumber( pageNumber+1 )
    }
    const previousPage = () => {
        setPageNumber( pageNumber-1 )
    }


    const remainder = allArticles.length % 5
    const listNoRemainder = allArticles.length - remainder
    const fullPages = listNoRemainder / 5
    
    
    return <div >
    <Title/>
    <h1 className='text-5xl font-bold text-red-500 pb-8'>Articles</h1>
    <h3>Search options:</h3>
    <div className="grid grid-cols-10 gap-5 pb-8">
        
    
        
            
                {topics.map((topic) => {
                    const firstLetter = topic.slug.charAt(0).toUpperCase()
                    console.log(firstLetter)
                    const lastLetters = topic.slug.slice(1)
                    console.log(lastLetters)
                    return <div key={topic.slug}>
                        <Link className="btn w-30" to={`/articles/topics/${topic.slug}`}>{firstLetter + lastLetters}</Link>
                    </div>
                })}
                
            
            <SortBy className="col-span-3" setArticles={setArticles}/> 
    </div>
    
    <div className="pb-8">
        <Link className="btn" to={`/articles/post`}>Post New Article</Link>
    </div>
    
    <div className="grid grid-cols-4 gap-5">
        {articles.map((article) => {
            return <HomeArticleCard key={article.article_id}article={article}/>
        })}
    </div>
    <div>
        {allArticles.length <= 8 || pageNumber === 1 ? null : <button onClick={previousPage}>Previous Page</button>}
        {articles.length < 8 || remainder === 0 && pageNumber === fullPages || remainder > 0 && pageNumber === fullPages + 1 ? null : <button onClick={nextPage}>Next Page</button>}
    </div>
    
    </div>

}




// import { useSearchParams } from "react-router-dom";

//   let [searchParams, setSearchParams] = useSearchParams();

//   function handleSubmit(event) {
//     event.preventDefault();
//     // The serialize function here would be responsible for
//     // creating an object of { key: value } pairs from the
//     // fields in the form that make up the query.
//     let params = serializeFormQuery(event.target);
//     setSearchParams(params);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>{/* ... */}</form>
//     </div>
//   );










