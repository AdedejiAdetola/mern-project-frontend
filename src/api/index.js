import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

const post_url = '/posts';
const user_url = '/users'

export const fetchPosts = () => API.get(post_url);
export const createPosts = (newPost) => API.post(post_url, newPost) //to create new post and push to the post_url
export const updatePosts = (id, updatedPost) => API.patch(`${post_url}/${id}`, updatedPost)
export const deletePosts = (id) => API.delete(`${post_url}/${id}`)
export const likePosts = (id) => API.patch(`${post_url}/${id}/likePosts`)

export const signIn = (formData) => API.post(`${user_url}/signin`, formData)

export const signUp = (formData) => API.post(`${user_url}/signup`, formData)
