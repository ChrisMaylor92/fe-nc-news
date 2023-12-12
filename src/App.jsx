import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { Article } from './components/Article';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ArticlesByAuthor } from './components/ArticlesByAuthor';
import { ArticlesByTopic } from './components/ArticlesByTopic';
import { ArticleComments } from './components/ArticleComments';
import { PostComment } from './components/PostComment';
import { PostArticle } from './components/PostArticle';

function App() {


  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/articles/authors/:username" element={<ArticlesByAuthor/>} />
      <Route path="/articles/topics/:topic" element={<ArticlesByTopic/>} />
      <Route path="/articles/:article_id" element={<Article/>}/>
      <Route path="/articles/post" element={<PostArticle/>}/>
      <Route path="/articles/:article_id/comments" element={<ArticleComments/>}/>
      <Route path="/articles/:article_id/comments/post" element={<PostComment/>}/>  
    </Routes>
    </div>
  )
}

export default App
