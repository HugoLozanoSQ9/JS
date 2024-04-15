let koders = [
    /*
    {
        name: 'Yair',
        lastname:'Guadarrama'
    },{
        name:'maría',
        lastname: 'Moreno'
    },{
        name: ' Akira',
        lastname:'Tanno'
    }*/
    'yahir','maria','Akira'
]
 //Esto aplicó para una lista simple no para lista de objetos 
 /*
koders.forEach( (item,index,array)=>{
    console.log(item)
    console.log(index)
    console.log(array)
    let firstLetter = item.charAt(0)
    console.log(firstLetter)
} )*/

const createText = () =>{
    return 'texto insertado'

}

let testText = `El siguiente texto viene de una función : ${createText()}`

console.log(testText)

koders.forEach((koder)=>{
    let fullName = `${koder.name}, ${koder.lastname}`
})