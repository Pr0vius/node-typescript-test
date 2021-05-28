import { Router } from "express";
const router = Router();
import {
  getPosts,
  newPost,
  getPost,
  deletePost,
} from "../controllers/post.controllers";

router
    .route("/")
    .get(getPosts)
    .post(newPost)
;

router
    .route("/:postId")
    .get(getPost)
    .delete(deletePost)
;

export default router;
