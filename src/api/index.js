import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost) //to create new post and push to the url
export const updatePosts = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePosts = (id) => axios.delete(`${url}/${id}`)
export const likePosts = (id) => axios.patch(`${url}/${id}/likePosts`)