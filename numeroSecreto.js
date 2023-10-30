function adivinarNumero(numero) {
    // Genera un número aleatorio entre 1 y 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    if (numero == numeroSecreto) {
        return "¡Felicitaciones! Has adivinado el número secreto.";
    } else {
        return ("No has acertado. El número ingresado fue " + numero + " y el número secreto era " + numeroSecreto + "." );}
}

let numeroIngresado = 7; // Puedes cambiar este número
let resultado = adivinarNumero(numeroIngresado);
console.log(resultado);
