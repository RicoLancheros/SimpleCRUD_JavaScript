//Controllers/productController.js
// //Importar el modelo de productos
import * as productModel from "../models/productModel.js";

// //Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getProducts();
        console.log(products);
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" });
    }
};

// //Obtener un producto por id

export const getProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productModel.getProductById(productId);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// //Agregar un producto
export const createProduct = async (req, res) => {
    const productData = req.body;
    try {
        const productId = await productModel.createProduct(productData);
        res.status(201).json({ id: productId });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto" });
    }
};

// //Actualizar un producto
export const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    try {
        await productModel.updateProduct(productId, productData);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
};

// //Eliminar un producto
export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        await productModel.deleteProduct(productId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
};