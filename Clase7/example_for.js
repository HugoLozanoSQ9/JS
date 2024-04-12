/*
1.- Debo conocer cuales son las vocales
2.- debo conocer la longitud de la frase que voy a revisar 
3.- Debo tener un total de vocales con valor inicial en 0 
4.- voy a tomar la primer letra o caracter y lo comparamos con la lista de vocales
    si el caracter se encuentra en la lista de vocales voy a incrementar mi total de vocales en 1
    si el caracter no se encuentra en la lista de vocales, no hago nada 
5.- Tomar el siguiente caracter y repetimos la evaluación del paso 4, esto se repite tantas veces
como caracteres tenga la frase :D!
6.- cuando haya revisado todos los caracteres, entrego el resultado de total de vocales.

herramientas: 
vocales = lista - regex 
longitud de la frase = .length 
total de vocales = let total = 0 
conocer caracter por caracter  = .charAt()
evaluar si las vocales están en la oración (para array -- > includes, para regex --> test)
si pertenece entonces se incrementa total en 1 
se aplica un if o valor teranario 
ciclo --> for o for wach por ser listas
return total 

*/

const someString = 'The evil that men do'

const countVowels = (phrase) => {
    const vowelsList = /[aeiou]/i //se declara el regex con caracterísitca insensitiva
    const phraseLength = phrase.length
    let total = 0

    for (let i = 0; i < phraseLength; i++) {
        let isVowel = vowelsList.test(phrase.charAt(i))
        if (isVowel) {
            total++
        }
    }
    return total
}

let test1 = countVowels(someString)
let test2 = countVowels('Amor de mis amores')

console.log(test1)
console.log(test2)