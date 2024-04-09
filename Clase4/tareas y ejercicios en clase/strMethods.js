const phrase = 'La mejor forma de predecir el futuro es creandolo'
/* Se requiere:
    1.- Saber cuantos caracteres tiene la frase 
    2.- Saber cuantas letras tiene la frase
    3.-Saber cuantas palabras tiene la frase
    4.-Obtener la misma frase pero en mayusculas 
    5.-Obtener la misma frase pero con todas las letras "a" reemplazadas por un 4
*/
//suma de 7 + 8  = se obtiene un total  la suma siempre se representa con la adicion de 2 cosas iguales (perros con perros, manzanas con manzanas)



const solution1 = (stringToCountLength) => stringToCountLength.length 

console.log('La frase tiene:',solution1(phrase),'cantidad de caracteres')


const solution2  =(stringToCount)  =>{
    let total = 0 
    let total2 = 0
    for (let i = 0; i <stringToCount.length; i++) {
        total = total + 1;
        let recorrido = stringToCount.charAt(i)
        if (recorrido == ' '){
            total2 += 1 
        }
    }
    const resultado = total - total2

    return resultado
}

console.log('La frase tiene:',solution2(phrase), 'cantidad de letras')

const solution3 = (stringToCountWords) =>{
    let total = 0 
    let total2 = 0 

    for (let i = 0; i <stringToCountWords.length; i++) {
        total = total + 1;
        let recorrido = stringToCountWords.charAt(i)
        if (recorrido == ' '){
            total2 += 1 
        }
    }
    total2 +=1
    return total2    
}

console.log('La frase tiene:',solution3(phrase), 'cantidad de palabras')

const solution4 = (stringToUpperCase) => stringToUpperCase.toUpperCase()

console.log('La frase en mayusculas es:',solution4(phrase))

const solution5 = (stringToReplace) => stringToReplace.replaceAll('a',4)

console.log('La frase con las "a" reemplazadas es:',solution5(phrase))


