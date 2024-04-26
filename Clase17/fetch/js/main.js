// let a = 10

// setTimeout(function(){

//     a = a+5

// },1000)

// console.log(a)

const getKoders = async () => {
    //Creamos la peticion
    //Esperamos a que la petición se cumpla
    let response = await fetch('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json')
    //Desempaquetamos el contenido de la respuesta para extraer la info con la que vamos a trabajar
    let koders = await response.json()

    //console.log(koders) //imprime lo que jaló de la API
    /*
        for(key in koders){ //For cada llave en el objeto que quiero iterar
           // console.log(key)
            //console.log(koders[key])
        }
    */

    let keys = Object.keys(koders)
    //console.log(keys)

    let values = Object.values(koders)
    //console.log(values)

    let kodersArray = keys.map((key) => {
        return { ...koders[key], key }
    })

    console.log(kodersArray)
}

getKoders()



const postKoder = async (koderObjet) => {
    let response = await fetch('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json', {
        method: "POST",
        body: JSON.stringify(koderObjet)

    })
    
    let data = await response.json()
    console.log(data)
}