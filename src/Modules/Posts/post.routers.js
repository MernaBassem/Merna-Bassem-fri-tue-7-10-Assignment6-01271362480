import { Router } from "express";

import * as PostController from './post.controller.js'
import authenticate from "../../Midleware/authentication.midleware.js";

const router = Router()

router.post("/createPost", authenticate, PostController.createPost);
router.put("/updatePost/:id", authenticate, PostController.updatePost);

export default router;
