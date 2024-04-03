console.log('Hola carlos buenas noches jeje vamos a comenzar con tu pequeño sistema')

const numOrdenes =  11
const montoPrevisto = 4
const numDeDia = 10

function esMayorOMenor() {
    if (numOrdenes > montoPrevisto){
        console.log(`El numero de ordenes fue ${numOrdenes} es mayor al monto previsto por lo que debes incrementar la capacidad en el siguiente día`)
    }else if (montoPrevisto < numOrdenes){
        console.log(`El monto previsto fue ${montoPrevisto} y es mayor al numero de ordenes por lo que deberías de generar menos`)
    }else{
        console.log(`El monto previsto fue ${montoPrevisto} y las ordenes fueron ${numOrdenes} por lo que no tuvimos ninguna perdida, fue efectivo`)
    }
    
}

function diaEsParOImpar(){
    if (numDeDia % 2 == 0){
        console.log(`El día ${numDeDia} es par por lo que recuerda que hoy tendríamos que tener más numero de ordenes`)
    }else{
        console.log(`El día ${numDeDia} es impar por lo que te recomendaría que contínues con la producción general`)
    }
}

diaEsParOImpar()
esMayorOMenor()