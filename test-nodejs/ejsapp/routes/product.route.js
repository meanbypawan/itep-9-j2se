import express from "express";
import { addProductAction, addProductPage } from "../controller/product.controller.js";
import { verify } from "../middleware/auth.js";
const router = express.Router();

router.get("/add-product",verify,addProductPage);
router.post("/add-product",verify,addProductAction);
export default router;