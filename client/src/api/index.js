import axios from "axios";

const URL = "http://localhost:5000/posts";

//! fetching request
export const fetchData = () => axios.get(URL);

//! Posting Request
export const createPost = (newPost) => axios.post(URL, newPost);
