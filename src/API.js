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

export const postCommentAPI = (newCommentText, article_id, user) => {
    const newComment = {username: user, body: newCommentText}
    return api.post(`/api/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
        return data
    })
    .catch((err) => {
    })
}


export const patchArticle = (article_id, num) => {
    return api.patch(`/api/articles/${article_id}`, {inc_votes: num})
    .then((response) => {
        return response.article
    })
}

 

export const patchComment = (comment_id, num) => {
    return api.patch(`/api/comments/${comment_id}`, {inc_votes: num})
    .then ((response) => {
        return response.data.comment
    })
}
    

export const getUsers = () => {
    return api.get(`/api/users`)
    .then((response) => {
        return response.data.users
    })
}

export const deleteComment = (comment_id) => {
    return api.delete(`/api/comments/${comment_id}`)
}

export const getTopics = () => {
    return api.get(`/api/topics`)
    .then((response) => {
        return response.data.topics
    });
}
export const getAllArticlesFiltered = (topic) => {
    return api.get(`/api/articles?topic=${topic}`)
    .then((response) => {
        return response.data.articles
    });
}
