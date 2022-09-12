import express from "express";
import { getPosts } from "../controller/posts.js";

const router = express.Router();

//! creating a routes
// localhost:5000/posts
router.get("/", getPosts);

// router.post();
// router.put();
// router.delete();

export default router;
