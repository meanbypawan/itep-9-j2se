import express from "express";
import { addToCart, fetchCart, removeItem } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/add-to-cart",addToCart);

router.get("/:id",fetchCart);
router.delete("/remove-item/:userId/:productId",removeItem);
export default router;