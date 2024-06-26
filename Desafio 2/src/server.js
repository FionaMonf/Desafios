import express from "express";
import ProductManager from "./Components/ProductManager.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

const productos = new ProductManager();
const readProducts = productos.readProducts();

app.get("/products", async (req, res) => {
  console.log(await readProducts);
  
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Express por Local Host ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error del servidor ${error}`));
