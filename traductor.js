function traducirPalabra(palabra){

    let palabraTraducida = "";
    switch(palabra){
        case 'perro' : 
            palabraTraducida = "dog"
            break
        case 'pelota':
            palabraTraducida = "ball"
            break
        case 'arbol':
            palabraTraducida = "tree"
            break
        case 'genio':
                palabraTraducida = "genious"
                break
        default:
            console.log("La palabra ingresada es incorrecta");
    }

    return palabraTraducida
}

let imprimirPalabra = traducirPalabra("incorrecto");
console.log(imprimirPalabra);