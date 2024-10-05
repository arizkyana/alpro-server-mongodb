import { Router } from "express";
import productsController from "../controllers/products.controller";
import categoriesController from "../controllers/categories.controller";

const router = Router();

// CRUD Products
router.post("/products", productsController.create);
router.get("/products", productsController.findAll);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.remove);

// CRUD Categories

router.post("/categories", categoriesController.create);
router.get("/categories", categoriesController.findAll);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.remove);

export default router;
