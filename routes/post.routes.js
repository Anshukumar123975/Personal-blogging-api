import express from "express"
import { createPost, findPostsbyTag, findPostsById, deletePost, updateArticle } from "../controllers/post.controllers.js"

const router = express.Router();

router.post("/create", createPost);
router.post("/findByTags", findPostsbyTag);
router.post("/findById", findPostsById);
router.delete("/delete", deletePost);
router.put("/update", updateArticle);

export default router;