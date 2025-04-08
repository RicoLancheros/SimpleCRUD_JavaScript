//Index.js
// //src/index.js
// importaciones
import express from "express";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//invocamos las rutas del proyecto
app.use("/api", productRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});