import express from "express";
import { singInPage, signInAction } from "../controller/admin.controller.js";
const router = express.Router();

// http://localhost:3000/admin/sign-in
router.get("/sign-in",singInPage);
router.post("/sign-in",signInAction);
export default router;