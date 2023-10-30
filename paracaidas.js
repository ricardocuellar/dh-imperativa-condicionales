function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000 && altura >= 2000 && altura <3000){
        return "abrir paracaídas."
    } else {
        return "No abrir paracaídas."
    }
}

let velocidad = 900;
let altura = 3500;
let resultado = abrirParacaidas(velocidad, altura)
console.log(resultado);