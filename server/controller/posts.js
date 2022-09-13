import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    //find a post
    const postMsgs = await PostMessage.find();
    res.status(200).json(postMsgs);
  } catch (error) {
    //if error  found
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  //we need data from the frontend --> req.body
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(421).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
