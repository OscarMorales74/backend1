class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct (title, description, price, thumbnail, idProduct, stock){
        
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !idProduct || !stock) {
            console.log("Todos los campos son obligatorios");
        };
        //validacion del id
        const productRepeated = this.#getIdProduct(idProduct);
        if (productRepeated) {
            console.log("Ya existe un producto con ese código");
        };
        const product = {
            title,
            description,
            price,
            thumbnail,
            id: this.#nuevoId() + 1,
            stock
        };
        this.products.push(product);

    }
    // Validacion del id
    #getIdProduct(idProduct){
        return this.products.find(product => product.id === idProduct)
    }
    
    //metodo para id incremental
    #nuevoId(){
        let maxId = 0;
        this.products.map(product => {
            if(product.id > maxId) maxId = product.id;
        })
        return maxId;
    }

    getProductsById(idProduct){
        const product = this.#getIdProduct(idProduct);
        if(product){
        return (
            this.products.find(product => product.id === idProduct),
            console.log(`el producto elegido tiene id ${product.id}`),
            console.log(product));
    }else {
        console.log('Not found');
    }
    }
}

const productManager = new ProductManager();

productManager.addProduct('Lapiz', 'Lapiz grafito', 500,'imagen', 1, 20)
productManager.addProduct('Goma', 'Goma de borrar', 50, 'imagen', 20, 30)
productManager.addProduct('Cuaderno', 'Cuaderno cuadriculado', 300, 'imagen', 40, 60)
productManager.addProduct('Cuaderno', 'Cuaderno cuadriculado', 300, 'imagen', 40, 80)

console.log(productManager.getProducts());
productManager.getProductsById(2)