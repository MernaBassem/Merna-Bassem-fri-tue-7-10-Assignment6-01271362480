

import { Router } from "express";
import * as UserController from "./user.controller.js"
const router = Router()

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

export default router ; 
