/*
.map()

Es un método iterativo de array 
Recorre cada elemento del array, y le aplica un callback, luego, crea un nuevo array con el resultado (valor de retorno) del callback 
y devuelve ese nuevo array 

*El array resultante SIEMPRE tiene la misma cantidad de elementos que el array original

*/

let numbers = [2,4,6]

const getSquareNumbers = (numbersArray) => numbersArray.map((number)=> number * number )

let test = getSquareNumbers(numbers)

console.log(test)


/*
const getSquareNumbers = (numbersArray) =>{
    let result = []
    numbers.numbersArray.forEach(number =>{
        let square = number * number
        result.push(square)
    })
    return result
}

let testSquareForEach = getSquareNumbers(numbers)
console.log(testSquareForEach)
*/

/*

let squares = numbers.map((item,index,arr)=>{
    let squareNumber = item*item
    console.log(squareNumber)
    return squareNumber
})

console.log(squares)
*/