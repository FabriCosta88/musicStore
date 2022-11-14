//Hago un funcion para crear el modal donde se ve el carrito con los productos que agrega el usuario
//Header
function pintarCarrito () {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "block"
    const modalHeader= document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h2 class="modal-titulo">Carrito</h2>
    `

    modalContainer.append (modalHeader)

//Boton para cerrar el modal
    let modalbutton = document.createElement("h1")
    modalbutton.innerText = "x"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append (modalbutton)

//Body del modal
    carrito.forEach((product) => {

        let carritoBody = document.createElement("div")
        carritoBody.className = "modal-body"
        carritoBody.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>$ ${product.precio}</p>
            <span class="restar">-</span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar">+</span>
            <p>Total: ${product.cantidad * product.precio}</p>
            <div class="boton-eliminar">
                <img src="./Imagenes/basura-llena.svg">
            </div>
        `

        modalContainer.append(carritoBody)

//Funcionalidad del boton restar producto
    let restar = carritoBody.querySelector(".restar")
    restar.addEventListener("click", () => {
        if (product.cantidad !== 1){
            product.cantidad --
        }
        saveLocal()
        pintarCarrito()
        })
//Funcionalidad del boton sumar producto
    let sumar = carritoBody.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        product.cantidad ++
        saveLocal()
        pintarCarrito()
    })
//Funcionalidad del boton Eliminar producto
    let eliminar = carritoBody.querySelector(".boton-eliminar")

    eliminar.addEventListener("click", () => {
        eliminarProducto(product.id)
    })

})

//Footer del modal
    const total = carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad, 0)

    const precioTotal = document.createElement ("div")
    precioTotal.className = "total-footer"
    precioTotal.innerHTML = `
    <p class="precio-total">Total a pagar: $ ${total}</p>
    <button class="vaciar-carrito">Vaciar Carrito</button>
    <button class="pagar">Pagar</button>
    `
    modalContainer.append(precioTotal)

    //Funcionlidad del boton Vaciar Carrito
    let vaciarCarrito = precioTotal.querySelector(".vaciar-carrito")

    vaciarCarrito.addEventListener("click", () => {
        Swal.fire({
            title: 'Seguro quieres vaciar el carrito?',
            text: "No podras revertir la accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar!'
        })  .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Carrito Vacio!',
                'Su carrito ha sido vaciado.',
                'success'
              )
            carrito = []
            saveLocal()
            pintarCarrito()
            contadorCarrito()
            }
          })

        saveLocal()
        pintarCarrito()
        contadorCarrito()
    })
//Boton Pagar: Solo aplico una notificacion que se pago correctamente
let pagar = precioTotal.querySelector(".pagar")

pagar.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Pagado',
        text: 'Gracias por su compra!',
      })
        carrito = []
        saveLocal()
        pintarCarrito()
        contadorCarrito()
    })
}



verCarrito.addEventListener("click", pintarCarrito)


//Funcion para eliminar un producto del carrito
function eliminarProducto (id) {
    const buscarId = carrito.find((element) => element.id ===id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    })

    pintarCarrito()
    saveLocal()
    contadorCarrito()
}

//Funcion para que aparezca un contador de productos al lado del icono del carrito
function contadorCarrito () {
    cantidadCarrito.style.display = "block"

    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

//Llamo a la funcion para que cuando refresque la pagina me aparezca el contador de productos al lado del carrito
contadorCarrito()