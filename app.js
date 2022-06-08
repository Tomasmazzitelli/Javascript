class Peluche{
    constructor(marca, modelo, medidas, precio) {



    this.marca = marca 
    this.modelo = modelo 
    this.medidas = medidas
    this.precio = precio}

    hablar(){
        console.log("Mi marca es:" + this.modelo);
    }
 
 }
 
 const Peluche1 = new Peluche ("Miniso","1316","23cms",10000)
 const Peluche2 = new Peluche ("Miniso","1320","30cms",11000)
 Peluche1.descuento = 5000

 console.log(Peluche1);
 console.log(Peluche2);
 Peluche1.hablar()
 Peluche2.hablar()





 const carrito = []


const mostrarMensaje = (Peluche) => {
    console.log('El Peluche ' + Peluche.marca + ' de ' + Peluche.modelo + ' cuesta $' + Peluche.precio)
    alert('El Peluche ' + Peluche.marca + ' de ' + Peluche.modelo + ' cuesta $' + Peluche.precio)
}


const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const agregarProducto = () => {
    const productoElegido = prompt('Elegi un peluche entre: 1316, 1320').toLowerCase()

    switch (productoElegido) {
        case '1316':
            mostrarMensaje(Peluche1)
            carrito.push(Peluche1)
            break
        case '1320':
            mostrarMensaje(Peluche2)
            carrito.push(Peluche2)
            break
        default:
            console.log('Por favor, ingresa una opcion correcta')
            break
    }

    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        console.log('Finalizo Compra, su total es de $' + totalCarrito())
        alert('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()
