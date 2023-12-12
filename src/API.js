import axios from "axios";

const api = axios.create({
    baseURL: "https://chriss-new-app.onrender.com",
  });

export const getArticleById = (article_id) => {
    api.get(`/api/articles/${article_id}`).then((response) => {
        return response.data.article
      });
}


export const getCommentsByArticleId = (article_id) => {
    api.get(`/api/articles/${article_id}/comments`).then((response) => {
        return response.data.comments
    });
}