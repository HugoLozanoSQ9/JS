//this en objetos se va a encerrar en si mismos oen el mundo en el que vive la función.
//el mundo actual de la función greeting es el objeto foo
let foo = {
    name:'some object', 
    //Una función anónima es una función que no tiene nombre or ejemplo el valor de la llave greeting
    greeting : function () {
        console.log(this.name)
    }
}
foo.greeting()


//La función flecha va a buscar la variable name dentro de todo el scope global y como no la encuentra directamente la deja indefinida
let bar = {
    name : 'other object',
    greeting : () =>{
        console.log(this.name)
    }
}

bar.greeting()

Myarr.filter((item)=>{
    return item.id === 1
})
 
//Función flecha anónima. 
//A esto se le llama callback 
// (item)=>{
//     return item.id === 1
// }

setTimeout(function () {
    console.log('Hola Koders')
},6000)

    //Acá también se maneja una función anónima
// function () {
//     console.log('Hola Koders')
// }

