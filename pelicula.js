function valorarPelicula(valoracion){

    let valor = "";
    switch(valoracion){
        case 1 : 
            valor = "Muy Mala"
            break
        case 2:
            valor = "Mala"
            break
        case 3:
            valor = "Mediocre"
            break
        case 4:
            valor = "Buena"
                break
        case 5:
            valor = "Muy Buena"
                break
        default:
            console.log("Ingresaste un valor inválido");
            return 0;
    }
  
    if(valoracion <= 3){
        return `Calificaste la película como ${valor}. Lo lamentamos mucho!`;
    }else{
        return `Calificaste la película como ${valor}. Me alegra tu valoración`
    }
}


let resultado = valorarPelicula(5)
console.log(resultado);

console.log("Gracias por su visita!!!");