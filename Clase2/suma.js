function sumarDosNumeros(num1,num2) {
    resultado = num1 + num2
    return resultado
}

function dobleDeDosNumeros(funcAnt,num1,num2) {
    resultado = funcAnt(num1,num2)
    resultado= resultado*2
    return resultado
}


const x = dobleDeDosNumeros(sumarDosNumeros,3,5)
console.log(x)