import express from "express";
import { addToCart, fetchCart, removeItem } from "../controller/cart.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/add-to-cart",auth,addToCart);

router.get("/:id",auth,fetchCart);
router.delete("/remove-item/:userId/:productId",auth,removeItem);
export default router;