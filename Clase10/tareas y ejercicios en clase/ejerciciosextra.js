let data = [
    ['Israel','Salinas',34],
    ['Charles','Silva',27],
    ['Naomi','Lopez',27],
    ['David','Moranchesl',28],

]
//2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista

/*
1.- Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
3.-Necesitamos reestructurar la data para que quede de la siguiente forma: 
*/
const fullName = (lista) =>{
    let fullNamesList = lista.map((mentor) =>{
        let infoMentor = [...mentor]
        infoMentor = `${mentor[0]} ${mentor[1]}`
        return infoMentor
    })

    return fullNamesList  
}


const listaDeEdades = (lista) =>lista.map((mentor) =>mentor[2])
const edadMayor = (listaDeEdades)=> Math.max(...listaDeEdades)
const edadMenor = (listaDeEdades)=> Math.min(...listaDeEdades)


//console.log(`La edad mayor es: ${edadMayor(listaDeEdades(data))} y La edad menor es: ${edadMenor(listaDeEdades(data))}`)

const reestructurarData = (lista) =>lista.map((listElement) =>({name:listElement[0],lastName:listElement[1],age:listElement[2]}))

console.log(reestructurarData(data))
