import { promises as fs } from "fs";

export default class ProductManager {
  constructor() {
    this.patch = "./productos.txt";
    this.products = [];
  }

  static id = 0;

  addProduct = async (title, description, price, imagen, code, stock) => {
    ProductManager.id++;

    let newProduct = {
      title,
      description,
      price,
      imagen,
      code,
      stock,
      id: ProductManager.id,
    };

    this.products.push(newProduct);

    await fs.writeFile(this.patch, JSON.stringify(this.products));
  };

  readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8");
    return JSON.parse(respuesta);
  };

  getProducts = async () => {
    let respuesta2 = await this.readProducts();
    return console.log(respuesta2);
  };

  getProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    if (!respuesta3.find((product) => product.id === id)) {
      console.log("Producto no encontrado");
    } else {
      console.log(respuesta3.find((product) => product.id === id));
    }
  };

  deleteProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter((products) => products.id != id);

    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
  };

  updateProducts = async ({ id, ...producto }) => {
    await this.deleteProductById(id);
    let productOld = await this.readProducts();

    let productosModificados = [{ id, ...producto }, ...productOld];
    await fs.writeFile(this.patch, JSON.stringify(productosModificados));
  };
}

const productos = new ProductManager();

// productos.addProduct("Titulo1", "Description", 1000, "Imagen1", "abc1", 3);
// productos.addProduct("Titulo2", "Description2", 100, "Imagen2", "abc2", 5);
// productos.addProduct("Titulo3", "Description3", 11, "Imagen3", "abc3", 10);
// productos.addProduct("Titulo4", "Description4", 12, "Imagen4", "abc4", 16);
// productos.addProduct("Titulo5", "Description5", 13, "Imagen5", "abc5", 18);
// productos.addProduct("Titulo6", "Description6", 14, "Imagen6", "abc6", 19);
// productos.addProduct("Titulo7", "Description7", 15, "Imagen7", "abc7", 20);
// productos.addProduct("Titulo8", "Description8", 16, "Imagen8", "abc8", 21);
// productos.addProduct("Titulo9", "Description9", 17, "Imagen9", "abc9", 22);
// productos.addProduct("Titulo10", "Description10", 18, "Imagen10", "abc10", 23);

// productos.getProducts();

// productos.getProductsById(3);

// productos.deleteProductById(2);

// productos.updateProducts({
//   title: "Titulo3",
//   description: "Description3",
//   price: 500,
//   imagen: "Imagen3",
//   code: "abc3",
//   stock: 10,
//   id: 3,
// });
