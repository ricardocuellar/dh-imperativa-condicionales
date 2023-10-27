
function totalAPagar(vehiculo, litrosConsumidos){
    totalAPagar = 0
    switch(vehiculo){
        case 'coche':
            precio = 86 
            break
        case 'moto':
            precio = 70
            break
        case 'autobus':
            precio = 55
            break
        default:
            console.log("Introduce un tipo de vehiculo valido")
            return 0
    }
    
    if(litrosConsumidos >= 0 && litrosConsumidos <= 25 ){
        cargoAdicional = 50;
    }if(litrosConsumidos > 25){
        cargoAdicional = 25;
    }
    else{
        return 0;
    }

    totalAPagar = (precio * litrosConsumidos) + cargoAdicional

    return totalAPagar

}

const total = totalAPagar('autobus', 100)
console.log(total)