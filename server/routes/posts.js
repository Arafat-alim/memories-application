import express from "express";
const router = express.Router();

//! creating a routes
// localhost:5000/posts
router.get("/", (req, res) => {
  res.send("Hurrah");
});
// router.post();
// router.put();
// router.delete();

export default router;
