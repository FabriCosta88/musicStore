const instrumentos = [
    {nombre: "piano", precio: 10000},
    {nombre: "guitarra", precio: 5000},
    {nombre: "bajo", precio: 8000},
    {nombre: "bateria", precio: 20000},
];

let carrito = []

alert("Bienvenidos a Music Store")

let consulta = prompt("Desea comprar algun instrumento? si/no")

while (consulta !="si" && consulta !="no"){
    alert("Por favor ingresa si o no")
    consulta = prompt("Desea comprar algun instrumento? si/no")
}

if(consulta == "si"){

    alert("Esta es nuestra lista de productos")
    
    let productos = instrumentos.map(
        (instrumento) => instrumento.nombre + " " 
        + instrumento.precio + "$" +"\n"
        );
        alert(productos.join (""))
        console.log (instrumentos)
} 

else if (consulta =="no"){
    alert("Gracias por venir")
}

while(consulta !="no"){

    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

if(producto == "piano" || producto == "guitarra" || producto == "bajo" 
   || producto == "bateria" || producto == "PIANO" || 
   producto == "GUITARRA" || producto == "BAJO" || producto == "BATERIA"){
    switch(producto){
        case "piano":
            precio = 10000
            break
        case "PIANO":
            precio = 10000
            break
        case "guitarra":
            precio = 5000
            break
        case "GUITARRA":
            precio = 5000
            break
        case "bajo":
            precio = 8000
            break
        case "BAJO":
            precio = 8000
            break
        case "bateria":
            precio = 20000
            break
        case "BATERIA":
            precio = 20000
            break
        default:
            break;
    }
let unidades = parseInt(prompt("Cuantas unidades queres llevar?"))
carrito.push({producto, unidades, precio})
}
else{
    alert("No tenemos ese producto")
}

consulta = prompt("Desea seguir comprando? si/no")
    if(consulta =="no"){
        alert("Gracias por la compra")
        console.log(carrito)
    }
    while(consulta != "no" && consulta !="si"){
        alert("Por favor ingresa si o no")
        consulta = prompt("Desea seguir comprando? si/no")
    }
}
carrito.forEach ((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
    total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
})

let total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert("El total a pagar por su compra es de $" + total)
console.log("El total a pagar por su compra es de $" + total)