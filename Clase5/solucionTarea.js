const phrase = 'La mejor forma de predecir el futuro es creandolo'

// const countWords = (text)=>{

//     let wordsList= text.split(' ')
//     let totalWords = wordsList.length
//     return totalWords
    
// }

const countWords = (text)=> text.split(' ').length 

console.log(countWords(phrase))





const replacePart = (text,toReplace,replacement) => text.replace(toReplace,replacement)

let regex = /[aáAÁ]/g

let replacementTest = replacePart(phrase, regex,'4')
console.log(replacementTest)