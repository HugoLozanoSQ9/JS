const dia = 3

function diaParOImpar() {
    const moduloDelDia = dia % 2
    const diaEsPar = moduloDelDia == 0
    if (diaEsPar){
        console.log(`El día ${dia} es par`)
    }else{
        console.log(`El día ${dia} es impar`)
    }
    
}

diaParOImpar()