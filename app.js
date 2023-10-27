
let edad = 19 //(el número es a modo de ejemplo, podés cambiarlo ocrear otras para tener varias pruebas)
if(edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}
else if(edad < 18) {
    console.log("No puede pasar al bar.")
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}
else {
    console.log("Puede pasar al bar y tomar alcohol.")
    if(edad == 21){
        console.log("¡Felicidades por llegar a la mayoria de edad!")
    }
}

console.log(esImpar(edad))

function esImpar(edad){
    if(edad%2 != 0){
        return "¿Sabías que tu edad es impar?"
    }
    return 0
}