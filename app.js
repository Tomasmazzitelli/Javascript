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

const Nombres = [];
const nombre = prompt("Cual es tu nombre");
const apellidos=  [];
const Apellido = prompt("Ingrese su apellido")
Nombres.push(nombre)
apellidos.push(Apellido)

if (Nombres.includes(nombre)){
    alert("Se enviaran sus datos señor: "+ nombre + " "+ Apellido)
}



const edad = prompt(" ingrese su edad para verificar")
if( edad < 18){
    alert( " No puede comprar estos productos")
} else {
    alert("Usted cumple con la edad minima")
}

let enviar = document.getElementById("enviar")
let datos = document.getElementById("datos")
let borrar = document.getElementById("borrar")

datos.hidden = "none"
datos.style.backgroundColor = "blue"

enviar.addEventListener("click", () =>{
  datos.hidden = ""
  let nombre = document.querySelector("#nombre").value
  let edad = document.querySelector("#edad").value

  const content = document.createElement("div");

  content.innerHTML = `
    <img src="https://imgs.search.brave.com/PhOieyBk7Yn5kIgWwRCpgHHeuaEoG_Y_-7MXtpURRwA/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/bmNRa0VUT09fZ2Vr/Z29wQ0ZiZDBBSGFE/dCZwaWQ9QXBp">
    <h4 class="red">nombre : ${nombre}</h4>
     <h4>edad : ${edad}</h4>
  `;
  datos.append(content)
})

//evento borrar

borrar.addEventListener("click", () => {
  datos.innerHTML = "";
})


let btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz agregado al carrito",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); 

btn.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); 



const lista = document.querySelector("#listado");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;
      lista.append(li);
    });
  }); 

const pedirDatos = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respuesta.json();
  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
    `;
    lista.append(li);
  });
};
pedirDatos();
