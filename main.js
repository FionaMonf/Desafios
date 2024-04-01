class ProductManager {
  constructor() {
    this.products = [];
    this.ultimoId = 1;
  }

  addProduct(product) {
    //validar que todas las propiedades no esten vacias
    let isValid = true;
    if (!product.title) {
      console.log("el titulo es obligatorio");
      isValid = false;
    }
    if (!product.description) {
      console.log("la descripcion es obligatoria");
      isValid = false;
    }
    if (!product.price) {
      console.log("el precio es obligatorio");
      isValid = false;
    }
    if (!product.thumbnail) {
      console.log("la ruta de la imagen es obligatoria");
      isValid = false;
    }
    if (!product.code) {
      console.log("el codigo es obligatorio");
      isValid = false;
    }
    if (!product.stock) {
      console.log("el stock es obligatorio");
      isValid = false;
    }
    if (!isValid) return;
    //validar que el codigo de producto no exista ya en el array de productos
    const prod = this.products.find((p) => p.code == product.code);
    if (prod) {
      console.log("el codigo ya existe en la lista de productos");
      return;
    }
    //agregar el producto a la lista de productos
    product.id = this.ultimoId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    //Buscar en products el producto cuyo id sea igual al parametro
    const prod = this.products.find((p) => p.id == id);

    //Retornar not found si no existe
    if (!prod) {
      console.log("not found");
      return;
    }
    //Si existe retornar el producto obtenido
    return prod;
  }
}
//Test
console.log("creo instancia de product manager");
const productManager = new ProductManager();
console.log("llamo a get products");
console.log(productManager.getProducts());

const nuevoProducto = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};

console.log("agrego nuevo producto");
productManager.addProduct(nuevoProducto);
console.log("llamo a get products");
console.log(productManager.getProducts());

const nuevoProductoRepetido = {
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
console.log("agrego producto repetido");
productManager.addProduct(nuevoProductoRepetido);

console.log("llamo a get product by id 1");
console.log(productManager.getProductById(1));
console.log("llamo a get product by id 2");
productManager.getProductById(2);

const nuevoProductoInvalido = {
  title: "producto prueba",
  description: "",
  price: 0,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
console.log("agrego producto Invalido");
productManager.addProduct(nuevoProductoInvalido);
console.log("llamo a get products");
console.log(productManager.getProducts());

const proximoProducto = {
  title: "producto prueba 2",
  description: "hola",
  price: 300,
  thumbnail: "Sin imagen",
  code: "abc1234",
  stock: 90,
};

console.log("verifico id autonumerico");
productManager.addProduct(proximoProducto);
console.log("llamo a get products");
console.log(productManager.getProducts());
