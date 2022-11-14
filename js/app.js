//Capturas de ID
const cardProductos1 = document.getElementById('cardProductos1');
const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modalContainer');
const cantidadCarrito = document.getElementById('cantidadCarrito');

//Array del carrito en donde voy a pushear los productos
let carrito = JSON.parse(localStorage.getItem("instrumentos")) || []


//Agrego el stock de los productos dentro del HTML 
stockProductos.forEach((producto) =>{
    let div = document.createElement('div')
    div.classList.add ('card')
    div.innerHTML = `
    <div class="contenedor-img">
        <img src=${producto.img} alt="">
    </div>
    <h3 class="titulo-card"> ${producto.nombre}</h3>
    <p class="precioProducto">$ ${producto.precio} </p>
    `;

    cardProductos1.append (div);

//Boton para agregar al carrito 
    let comprar = document.createElement("button")
    comprar.className = "agregar-compra"
    comprar.innerText = "Agregar al Carrito"

    div.append(comprar)

    comprar.addEventListener("click", () => {

        const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id)
        //Sumo cantidad de un mismo producto
        if(repetir == true){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad ++
                }
            })
        }else{  
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                img: producto.img,
                cantidad: producto.cantidad,
            })
        }
        Toastify({
            text: "Producto agregado al carrito",
            duration: 1200,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        console.log(carrito)
        contadorCarrito ()
        saveLocal ()
    })
})

//Funcion para setear un item en Local Storage
function saveLocal () {
    localStorage.setItem("instrumentos", JSON.stringify(carrito))
}



