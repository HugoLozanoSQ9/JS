function sumaDosNumeros(num1,num2) {
    let result = num1+num2
    return result
}

let prueba1 = sumaDosNumeros(3,4)

console.log(prueba1)


const addTwoNumbers = (num1,num2)=>{
    //esto nos lleva a lo siguiente: se puede eliminar la variable por que NO se va a utilizar después en el scope de la funcion 
    let result = num1 + num2
    return result
}

const addTwoNumbers1 = (num1,num2) =>num1+num2

let pruebaArrow = addTwoNumbers(3,20)

console.log(pruebaArrow)


// const restaDosNumeros = (num1,num2)=> num1-num2
// let prueba2 = restaDosNumeros(3,4)
// console.log(prueba2)