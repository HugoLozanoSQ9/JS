let perro = {
    nombre:'Perro',
    tipo:'Perro',
    edad:2,
    vacunado:false,
    direccion:{
        calle:'Camino',
        numero:24,
        colonia: 'Las flores',
        codigoPostal : 78600,
    }
}
//Se agrega por que no existe
perro.owner ='Israel salinas Martinez'

//let perro2 = perro 

//Se cambia una propiedad
perro.nombre = 'Rocky'

//Para crear como tal otro objeto clon debemos hacerlo con cada elemento del objeto o hacerlo con el operador de propagación

let perro2 = {...perro}

console.log('perro2', perro2)

perro.nombre = 'Boris'

console.log((perro))
console.log('perro2 después de cambiar', perro2)