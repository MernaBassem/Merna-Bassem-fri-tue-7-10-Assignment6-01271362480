import { Router } from "express";

import * as CommentController from "./comment.controller.js";
import authenticate from "../../Midleware/authentication.midleware.js";

const router = Router();

router.post("/createComment", authenticate, CommentController.createComment);
router.put("/updateComment/:id", authenticate, CommentController.updateComment);
router.delete(
  "/deleteComment/:id",
  authenticate,
  CommentController.deleteComment
);
router.get('/AllCommentInSpecificPost/:id',authenticate, CommentController.AllCommentInSpecificPost);
router.get(
  "/AllCommentInSpecificPostUserLogin/:id",authenticate,
  CommentController.AllCommentInSpecificPostUserLogin
);
router.get("/AllComment", authenticate, CommentController.AllComment);

export default router;
