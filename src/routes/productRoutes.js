// routes/productRoutes.js
// //src/routes/productRoutes.js
import express from "express";
const router = express.Router();
//importar el controlador de productos
import * as productController from "../controllers/productController.js";

// Obtener todos los productos
router.get("/product", productController.getAllProducts);
// Obtener un producto por id
router.get("/product/:id", productController.getProductById);
// Crear un producto
router.post("/newproduct", productController.createProduct);
// Actualizar un producto
router.put("/editproduct/:id", productController.updateProduct);
// Eliminar un producto
router.delete("/delproduct/:id", productController.deleteProduct);


// Exportar el router
export default router;

