import { Routes, Route } from "react-router-dom";
import './App.css'
import { Article } from './components/Article';
import { Error } from './components/Error'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ArticlesByAuthor } from './components/ArticlesByAuthor';
import { ArticlesByTopic } from './components/ArticlesByTopic';
import { PostComment } from './components/PostComment';
import { PostArticle } from './components/PostArticle';
import { LogIn } from './components/LogIn';
import { UserProvider } from "./contexts/UserContext";

function App() {


  return (
    <div>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/log_in" element={<LogIn/>}/> 
          <Route path="/articles/authors/:username" element={<ArticlesByAuthor/>} />
          <Route path="/articles/topics/:topic" element={<ArticlesByTopic/>} />
          <Route path="/articles/:article_id" element={<Article/>}/>
          <Route path="/articles/post" element={<PostArticle/>}/>
          <Route path="/articles/:article_id/comments/post" element={<PostComment/>}/>  
          <Route path="/*" element={<Error message="Route not found."/>} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App
