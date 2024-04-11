import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.patch = "./productos.txt";
  }

  addProduct = async () => {
    await fs.writeFile(this.patch, "hola");
  };
}

const productos = new ProductManager();

productos.addProduct();
