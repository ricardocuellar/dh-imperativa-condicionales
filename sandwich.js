

function totalSandwich(tipoSandwich, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    precioTotal = 0
    adicionales = 0
    switch(tipoSandwich){
        case 'carne':
            precioBase = 200
            break
        case 'pollo':
            precioBase = 150
            break
        case 'veggie':
            precioBase = 100
            break
        default:
            tipoSandwich = 'carne'
            precioBase = 200   
    }

    switch(tipoPan){
        case 'blanco':
            precioPan = 50
            break
        case 'negro':
            precioPan = 60
            break
        case 's/gluten':
            precioPan = 75
            break
        default:
            precioPan = 50
            break
    }

    
    if(queso){
        adicionales += 20
    }

    if(tomate){
        adicionales += 15
    }

    if(lechuga){
        adicionales += 10 
    }

    if(cebolla){
        adicionales += 15 
    }

    if(mayonesa){
        adicionales += 5 
    }

    if(mostaza){
        adicionales += 5
    }

    precioTotal  = precioBase + precioPan + adicionales

    return precioTotal
}

let sandwichPollo = totalSandwich('pollo','negro', true, true, false, false, true, false)
let sandwichVeggie = totalSandwich('veggie','blanco',true, true,true, true,true, true)
let sandwichErroneo = totalSandwich('pasto','cafe',true,true,true,true,true,true)

console.log(sandwichVeggie);