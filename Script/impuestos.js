let instrumento = prompt("que deseas comprar?" + " elige entre guitarra, piano o bateria")

let precio1 = parseInt(5000)
let precio2 = parseInt(12000)
let precio3 = parseInt(20000)

if(instrumento == "guitarra" || instrumento == "Guitarra" ){
    alert("la guitarra cuesta $" + precio1)
    alert("Y el total con impuestos es de $" + (precio1 + (precio1 * 0.21)))
}

else if(instrumento == "piano" || instrumento == "Piano"){
    alert("el piano cuesta $" + precio2)
    alert("Y el total con impuestos es de $" + (precio2 + (precio2 * 0.21)))
}

else if(instrumento == "bateria" || instrumento == "Bateria"){
    alert("la bateria cuesta $" + precio3)
    alert("Y el total con impuestos es de $" + (precio3 + (precio3 * 0.21)))
}

else if(instrumento != ""){
    alert("Error, elige entre los 3 instrumentos")
}

else{
    alert("Debes rellenar el campo")
}

alert("gracias por su consulta")