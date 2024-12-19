import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signup",
body("username","username is required").notEmpty(),
body("email","Invalid email id").isEmail(),
body("email","Email id is required").notEmpty(),
body("password","password is required").notEmpty(),
body("contact","Only digits are allowed").isNumeric(),signUp);

router.post("/signin",signIn);
export default router;

