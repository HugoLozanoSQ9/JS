const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais:'México',
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      pais:'México',

      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      pais:'Colombia',
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      pais:'Ecuador',
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
];

/*
1.-Necesito conocer la edad promedio de todos los perros
2.-Necesito obtener una lista de perros basados en el pais al que pertenecen
3.-Necesito una lista de los códigos postales de los perros
4.-Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos (solo debe aparecer Mexico, Ecuador y Colombia)
*/



let edadPromedio = (listaDeCanes) => { //Ejercicio 1
  let sumaDeEdades = 0
  listaDeCanes.forEach(edadPorCan => {
    sumaDeEdades += edadPorCan.edad
  });

  return sumaDeEdades / listaDeCanes.length
  
}

//console.log(edadPromedio(canes))

let edadPerruna = (listaDeCanes) =>{  //Ejercicio 2

  let listaDeCanesModificados = listaDeCanes.map((can)=>{
    let infoCan = {...can}
    let formato = `${infoCan.nombre} : ${infoCan.pais}`
    return formato
  })

  return listaDeCanesModificados
}

//console.log(edadPerruna(canes))

let codigosPostalesPerrunos = (listaDeCanes) =>{  //Ejercicio 3

  let listaDeCanesModificados = listaDeCanes.map((can)=>{
    let infoCan = {...can}
    let codigoPostalPerruno = `${infoCan.nombre} : ${infoCan.direccion.codigoPostal}`
    return codigoPostalPerruno
  })

  return listaDeCanesModificados
}
//console.log(codigosPostalesPerrunos(canes))


const reduceData = (dogsArray) =>{
  let result = dogsArray.reduce((accum,current)=>{
    return { ...accum,pais: [...accum.pais, current.pais] }
    
  },{
    pais : []
  })
  return result

}
console.log(reduceData(canes))