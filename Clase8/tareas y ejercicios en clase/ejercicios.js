const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
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
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
];
  
/*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    6.- Necesitamos una nueva lista con únicamente el nombre de cada can
  */

//1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )


let edadPerruna = (listaDeCanes) =>{  //Ejercicio 1

  let listaDeCanesModificados = listaDeCanes.map((can)=>{
    let infoCan = {...can}
    infoCan.edad = infoCan.edad*7
    return infoCan
  })

  return listaDeCanesModificados
}

let perrosVacunados = (listaDeCanes) =>{ //Ejercicio 2
  
  let totalDeCanesVacunados = 0
  
  listaDeCanes.forEach(can => {
    let canVacunado = can.vacunado
    if (canVacunado) {
      totalDeCanesVacunados +=1
    }
  });
  
  return totalDeCanesVacunados
}

let listaConFormato = (listaDeCanes) =>{ // Ejercicio 3
  //Se define la variable con la iteración de la lista en donde por defecto se valida el item (cada objeto o cada perro)
  let formatList = listaDeCanes.map((can)=>{
    //Se ejecuta la creación de un nuevo perro la misma cantidad de veces que de perros tenga en mi lista
    //canClon se encarga de clonar cada perro (cada item) (cada objeto)
    let canClon = {...can}
    //canClon.nombre se encarga de reasignar los valores a el formato deseado 
    canClon.nombre =`${canClon.nombre}, ${canClon.direccion.calle}, #${canClon.direccion.numero}, ${canClon.direccion.colonia}, ${canClon.direccion.codigoPostal}`
    //Regresaremos la misma cantidad de canes formateados en una nueva lista con todos los canes iterados
    return canClon
  })
  //Se retorna la lista creada por map 
  return formatList
}

let edadPromedio = (listaDeCanes) => { //Ejercicio 4
  let promedio = 0
  let sumaDeEdades = 0
  listaDeCanes.forEach(edadPorCan => {
    sumaDeEdades += edadPorCan.edad
  });
  promedio = sumaDeEdades / listaDeCanes.length
  return promedio
}

let cambioDeVacunados = (listaDeCanes) =>{ //Ejercicio 5

  let listaDeVacunados = listaDeCanes.map((can)=>{

    canVacunado = {...can}
    if (canVacunado.vacunado) {
      canVacunado.vacunado = 'Si'
    }else{
      canVacunado.vacunado = 'No'
    }
    return canVacunado

  })
  return listaDeVacunados

}
//6.- Necesitamos una nueva lista con únicamente el nombre de cada can

let nombreDelCan = (listaDeCanes) =>{ //Ejercicio 6

  let nuevaLista = listaDeCanes.map((can)=>{
    let nombres = {...can}
    nombres = nombres.nombre
    return nombres
  })
  return nuevaLista
}

//console.log(edadPerruna(canes)) //Ejercicio 1
//console.log(perrosVacunados(canes)) //Ejercicio 2
//console.log(listaConFormato(canes)) //Ejercicio 3
//console.log(edadPromedio(canes)) //Ejercicio 4
//console.log(cambioDeVacunados(canes)) //Ejericio 5
//console.log(nombreDelCan(canes)) //Ejercicio 6


