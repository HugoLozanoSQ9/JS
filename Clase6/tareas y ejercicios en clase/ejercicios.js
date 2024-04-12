/*
1.- necesitamos poder entregar las iniciales del nombre de una persona, 
considerando unicamente primer nombre, apellido paterno y apellido materno
si mi input es: Israel Salinas Martinez
mi output debe ser: I. S. M. 

2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres debemos poder obtener algún nombre al azar. 
El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta
cuando yano halla nombres, debe avisar que ya no hay nombres en la lista.  (debe ir descartandolos)

*/


/*
1.-
función = funcion flecha
nombre completo = String
nombre separado = lista
iniciaes = string 
para sacar la inicial debo hacerlo separando la lista 
necesito que regrese un string (join(' '))

Solución A
primero definimos el nombre

lo separamos y lo convertimos a lista
evaluamos cada elemento de la lista 
evaluamos si el nombre tiene De, Del San etc.. 
    Si lo tiene omitimos estos elementos de la lista 
    Si no lo tiene se agregan a la nueva lista 
tomamos de cada elemento de la lista la primera letra 
anexamos a una nueva lista cada inicial obtenida

*/
/*

2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres debemos poder obtener algún nombre al azar. 
El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta
cuando ya no halla nombres, debe avisar que ya no hay nombres en la lista.  (debe ir descartandolos)

Funcion = Función flecha
nombres = Lista de nombres
obtener nombre al azar (investigar metodos para obtener un elemento de la lista aleatorio)
el nombre obtenido se elimina (se puede mover a otra lista para no afectar el array)

1ro se define la lista de nombres 
2do ocupamos métodos para obtenerlos de manera aleatoria 
3ro seleccionamos alguno de los nombres y lo mostramos en consola
4to lo quitamos de la lista original (lo pasamos a otra lista x cualquier cosa)
5to si la lista está vacía entonces:
    si esta vacía mostrar un mensaje en consola de que ya no hay nombres
    si no está vacía proceder

*/

const listaNombres=['Hugo Lozano Rivera', 'Juan Lozano Rivera', 'Sebastian Lozano Rivera', 'Israel Salinas Martinez']

//Ruleta con lista paralela 
const ruleta = (lista) =>{
    if(lista.length == 0){
        console.log('Tu lista está vacía, por favor ingresa datos ')
    }else{
        let nuevaListaDeNombres = []
        let randomName = listaNombres[Math.floor(Math.random() * lista.length)]
        let indice = listaNombres.indexOf(randomName)
        nuevaListaDeNombres.push(randomName)
        listaNombres.splice(indice, 1)
        let resultado = console.log(`el seleccionado es:${randomName}, dado que se eliminó ahora tu lista es: ${listaNombres}, pero no te preocupes he creado una lista paralela para que sepas quién ya paso:${nuevaListaDeNombres}`)
    
        return resultado
    }
}

// Ruleta sin lista paralela
const ruleta1 = (lista) =>{
    if(lista.length == 0){
        console.log('Tu lista está vacía, por favor ingresa datos ')
    }else{
        let randomName = listaNombres[Math.floor(Math.random() * lista.length)]
        listaNombres.splice(listaNombres.indexOf(randomName), 1)
        let resultado = console.log(`el seleccionado es:${randomName}, dado que se eliminó ahora tu lista es: ${listaNombres}`)
        return resultado
    }
}


//console.log(`Hola, el nombre seleccionado es: ${ruleta1(listaNombres)[0]} y tu lista quedó de la siguiente manera ${ruleta1(listaNombres)[1]} `)

console.log(ruleta(listaNombres))






const DefinirIniciales =( nombreCompleto ) => {
    let iniciales = []
    const nombreEnArray = nombreCompleto.split(' ')
    for (let i = 0 ;i<nombreEnArray.length;i++ ){
        
        if(nombreEnArray[i] !== 'De' && nombreEnArray[i] !== 'Los' && nombreEnArray[i] !== 'La' && nombreEnArray[i] !== 'Del' && nombreEnArray[i] !== 'San'){
            iniciales.push(nombreEnArray[i].charAt(0))
        }
    }
    return iniciales.join(' ')
}

console.log(DefinirIniciales('Hugo Lozano Rivera'))
