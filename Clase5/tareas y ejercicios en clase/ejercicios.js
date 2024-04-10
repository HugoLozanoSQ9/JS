const phrase = 'La mejor forma de predecir el futuro es creandolo'
/*
1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posición 
(quiero saber la longitud de la segunda palabra si preguntamos por una posición que no existe 
en la frase devolvemos un mensaje que indique el error)

2.- De la frase, necesitamos eliminar una palabra con base en su posición, y recibir una nueva frase sin la palabra borrada

3.-se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es equella que tiene 3 caracteres o menos
y debemos obtener la nueva grase sin palabras cortas 

4.- Se requiere obtener la frase, pero escrita en orden invertido

*/

const ex1 = (text,position) =>{
    const arreglo = text.split(' ') //devuelve un arreglo
    if (position > arreglo.length){
        console.log(`Perdoname pero la cantidad ${position} se encuentra fuera del arreglo por lo que te pido seleccionar uno menor a ${arreglo.length}`)
    }else{
    const select = arreglo[position].length //al arreglo se valida la posición a consultar y se proporciona el tamaño 
    return select
    }
} 
//console.log(ex1(phrase,10))

const ex2 = (text, position) =>{
    const arreglo = text.split(' ')
    arreglo.splice(position,1)
    return arreglo.join(' ')
}
//console.log(ex2(phrase,4))

const ex3 = (text)=>{
    const arreglo = text.split(' ')
    const array = []
    for (let i=0; i< arreglo.length;i++){
        if (arreglo[i].length <=3 ){
            arreglo.splice(arreglo[i],1)
        }
        array.push(arreglo[i])
    }
    return array.join(' ')
}

console.log(ex3(phrase))

const ex4 = (text) =>{
    const arreglo = text.split(' ') //devuelve el arreglo
     return arreglo.reverse()
}
//console.log(ex2(phrase))