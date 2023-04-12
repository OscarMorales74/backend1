class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct (id, title, description, price, thumbnail, codigo, stock){
        
        // Validar que todos los campos sean obligatorios
        if (!id, !title || !description || !price || !codigo || !stock) {
            console.log("Todos los campos son obligatorios");
        }else{
            //validacion del id
            const productRepeated = this.products.find(product => product.codigo === codigo);
            if (productRepeated) {
                console.log("Ya existe un producto con ese código");
            } else{
                const product = {
                    id: this.#nuevoId() + 1,
                    title,
                    description,
                    price,
                    thumbnail,
                    codigo: codigo,
                    stock
                }
                this.products.push(product);
            }
        }
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

productManager.addProduct(1, 'Lapiz', 'Lapiz grafito', 500,'imagen', 501, 20)
productManager.addProduct(1, 'Goma', 'Goma de borrar', 50, 'imagen', 502, 30)
productManager.addProduct(1, 'Cuaderno', 'Cuaderno cuadriculado', 300, 'imagen', 503, 60)
productManager.addProduct(1, 'Cuaderno', 'Cuaderno cuadriculado', 300, 'imagen', 503, 80)

console.log(productManager.getProducts());
productManager.getProductsById(2)