//Action Creator are the function that return action

import * as api from "../api";

//fetching data is an asynchronous task, so we have to make our code like that it can deal with it
export const getPosts = () => async (dispatch) => {
  //   const action = { type: "FETCH_ALL", payload: [] };
  //   return action;
  //   dispatch({type: "FETCH_ALL", payload: });
  try {
    const { data } = await api.fetchData();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//creating a post
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Updating post
export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
