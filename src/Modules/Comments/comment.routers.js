import { Router } from "express";

import * as CommentController from "./comment.controller.js";
import authenticate from "../../Midleware/authentication.midleware.js";

const router = Router();

router.post("/createComment", authenticate, CommentController.createComment);
router.put("/updateComment/:id", authenticate, CommentController.updateComment);

export default router;
