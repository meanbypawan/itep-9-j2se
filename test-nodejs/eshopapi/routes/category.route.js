import express from "express";
import { list, saveInBulk, getCategoryById } from "../controller/category.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",list);
router.get("/:id",getCategoryById);
export default router;