import axios from "axios";

const api = axios.create({
    baseURL: "https://chriss-new-app.onrender.com",
  });


export const getArticleById = (article_id) => {
    return api.get(`/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    });
}


export const getCommentsByArticleId = (article_id) => {
    return api.get(`/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    });
}


export const getAllArticles = () => {
    return api.get(`/api/articles`)
    .then((response) => {
        return response.data.articles
    })
}


export const getAllArticlesPagnated = (pageNumber) => {
    return api.get(`/api/articles?limit=5&p=${pageNumber}`)
    .then((response) => {
        return response.data.articles
    })
}

export const patchArticle = (article_id, up) => {
    if(up) {
        return api.patch(`/api/articles/${article_id}`, {inc_votes: 1})
    .then((response) => {
        return response.article
    })
    }
    if(!up) {
        return api.patch(`/api/articles/${article_id}`, {inc_votes: -1})
    .then((response) => {
        return response.article
    })
 }
}
 
export const patchComment = (comment_id, up) => {
    if(up){
        return api.patch(`/api/comments/${comment_id}`, {inc_votes: 1})
        .then ((response) => {
            return response.data.comment
        })
    }
    if(!up){
        return api.patch(`/api/comments/${comment_id}`, {inc_votes: -1})
        .then ((response) => {
            return response.data.comment
        })
    }
    
}