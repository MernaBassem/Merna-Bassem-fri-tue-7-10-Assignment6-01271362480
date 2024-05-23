import { Router } from "express";

import * as PostController from './post.controller.js'
import authenticate from "../../Midleware/authentication.midleware.js";

const router = Router()

router.post("/createPost", authenticate, PostController.createPost);
router.put("/updatePost/:id", authenticate, PostController.updatePost);
router.delete("/deletePost/:id", authenticate, PostController.DeletePost);
router.get("/listPostOfUser", authenticate, PostController.listPostOfUser);
router.get("/allPost", authenticate, PostController.allPost);

export default router;
