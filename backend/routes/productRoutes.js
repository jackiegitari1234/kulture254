import express from "express";
import { getProducts, getProductById } from "../controller/ProductController.js";

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);


export default router;