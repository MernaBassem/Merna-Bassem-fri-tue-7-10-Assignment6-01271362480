import { Router } from "express";

import * as CommentController from "./comment.controller.js";
import authenticate from "../../Midleware/authentication.midleware.js";

const router = Router();

router.post("/createComment", authenticate, CommentController.createComment);

export default router;
