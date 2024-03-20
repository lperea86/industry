function obtenerProductos() {
    return [
        { id: 1, nombre: "Remera Combinada", codigo: "h1", color: "0", talle: "S", categoria: "men", stock: 2, precio: 5000, precio_lista: "6000", rutaImagen: "./assets/img/kids3.jpg" },
        { id: 2, nombre: "Buzo con capucha", codigo: "h2", color: "1", talle: "S", categoria: "men", stock: 2, precio: 6000, precio_lista: "7000", rutaImagen: "./assets/img/kids2.jpg" },
        { id: 3, nombre: "Remera musculosa", codigo: "h3", color: "3", talle: "S", categoria: "men", stock: 2, precio: 7000, precio_lista: "8000", rutaImagen: "./assets/img/kids1jpg.jpg" },
        { id: 4, nombre: "Short de baño estampado", codigo: "h1", color: "0", talle: "S", categoria: "kids", stock: 2, precio: 5000, precio_lista: "6000", rutaImagen: "./assets/img/kids4.jpg" },
        { id: 5, nombre: "Camisa M/C Flower", codigo: "h1", color: "3", talle: "S", categoria: "kids", stock: 2, precio: 5000, precio_lista: "6000", rutaImagen: "./assets/img/kids5.jpg" },
        { id: 6, nombre: "Short de baño liso", codigo: "h1", color: "1", talle: "S", categoria: "kids", stock: 2, precio: 5000, precio_lista: "6000", rutaImagen: "./assets/img/men2.jpg" }
    ];
}

function principal() {
    let productos = obtenerProductos();
    renderizarProductos(productos);
}

principal()

function renderizarProductos(productos) {
    let contenedor = document.getElementById("card-group")
    contenedor.innerHTML = ""

    productos.forEach(({ rutaImagen, nombre, precio_lista, stock, id }) => {
        let tarjetaProd = document.createElement("div")
        tarjetaProd.className = "card"

        tarjetaProd.innerHTML = `
            <img src="${rutaImagen}" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">Descripcion de producto</p>
                <p>$${precio_lista}</p>
                <p>Quedan ${stock} unidades</p>
                <button class="comprar" data-id="${id}">Agregar al carrito</button>
            </div>
        `

        contenedor.appendChild(tarjetaProd)
    })

    contenedor.addEventListener("click", (event) => {
        if (event.target.classList.contains("comprar")) {
            let productId = parseInt(event.target.getAttribute("data-id"))
            agregarAlCarrito(productId)
        }
    })
}

function obtenerCarrito() {
   return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
}

function agregarAlCarrito(productId) {
    let carrito = obtenerCarrito()
    carrito.push(productId)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    Swal.fire("Se agregó el producto al carrito correctamente!")
}

let botonesComprar = document.querySelectorAll(".comprar")
botonesComprar.forEach(boton => {
    boton.addEventListener("click")
})


function finalizarCompra() {
    alert("Muchas gracias por su compra")
    localStorage.removeItem("carrito")
    renderizarCarrito()
}
