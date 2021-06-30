import express from "express";
import ProductController from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", ProductController.createProductInfo);
router.put("/", ProductController.updateProductInfo);
router.get("/", ProductController.getAllProductInfo);
router.get("/:id", ProductController.getProductInfo);
router.delete("/:id", ProductController.deleteProductInfo);
router.post("/review", ProductController.createProductReview);
router.delete("/:id/review/:index", ProductController.deleteProductReview);

export default router;
