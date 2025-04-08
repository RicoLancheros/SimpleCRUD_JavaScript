//models/productModel.js
//creacion de la tabla productos
import { dbConfig } from "../config/db.config.js";
import mysql from "mysql2/promise";

const pool = mysql.createPool(dbConfig);

//Obtener los productos

//Get All Products
export const getProducts = async () => {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
}

//Obtener un producto por id
//Get Product by ID

export const getProductById = async (prudctId) => {
    const [rows] = await pool.query("SELECT * FROM products WHERE Id = ?", [prudctId]);
    return rows[0];
}

//Agregar un producto
//Create Product
export const createProduct = async (productData) => {
    const { name, price, description } = productData;
    const [result] = await pool.query("INSERT INTO products (name, price, description) VALUES (?, ?, ?)", [name, price, description]);
    return result.insertId;
}

//Actualizar un producto
//Update Product
export const updateProduct = async (productId, productData) => {
    const { name, price, description } = productData;
    await pool.query("UPDATE products SET name = ?, price = ?, description = ? WHERE Id = ?", [name, price, description, productId]);
}


//Eliminar un producto
//Delete Product
export const deleteProduct = async (productId) => {
    await pool.query("DELETE FROM products WHERE Id = ?", [productId]);
}


