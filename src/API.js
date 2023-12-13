import axios from "axios";


const api = axios.create({
    baseURL: "https://chriss-new-app.onrender.com",
  });

export const getArticleById = (article_id) => {
    return api.get(`/api/articles/${article_id}`).then((response) => {
        return response.data.article
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

export const postCommentAPI = (newCommentText) => {
    console.log(typeof newCommentText, ',,,')
    const newComment = {username:'butter_bridge', body: newCommentText}
    return api.post(`/api/articles/12/comments`, newComment)
    .then((result) => {
        console.log(result, 'dataaaaaaaaa')
        return data
    })
    .catch((err) => {
        console.log(err, 'err')
    })
}