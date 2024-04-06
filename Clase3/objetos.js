//No es obligatorio poner las '' o "" a menos que queramos que la key sea un texto con espacios 

const persona = {
    'edad': 12,
    'nombre': 'Pedro',
    'altura': 1.6,
    'partido': 'PRI',
    // decirHola:() => console.log('hola')
    decirHola: function () {
        console.log('hola')
    },
    'dinero': null,
    'novia': {
        nombre: 'Carolina',
        edad: 18
    }

}
console.log('line:19', persona.novia.nombre)

const oldPersona = new Object({
    'edad': 12,
    'nombre': 'Pedro',
    'altura': 1.6,
    'partido': 'PRI',
    // decirHola:() => console.log('hola')
    decirHola: function () {
        console.log('hola')
    },
    'dinero': null,
    'novia': undefined,
})

// const x = persona[decirHola]
// console.log(x)
console.log(persona.altura)

//Se pueden reasignar los valores de los objetos 

persona['nombre'] = 'Juan'
console.log(persona.nombre)
//Tambien se pueden reasignar así :
persona.nombre = 'Carlos'
console.log(persona.nombre)
//Agregar una propiedad
persona['nivelDeEstudios'] = 'Universidad'
console.log(persona.nivelDeEstudios)

const animal = {
    nombre: 'gato',
}
animal['raza'] = 'Garfield'
console.log(animal.raza)

//Propiedades dinámicas

//De esta forma se eliminan propiedades
delete(animal.nombre)
console.log(animal)

//Otra forma de hacerlo es: 
delete animal.raza
console.log(animal)

//Llaves dinámicas (no se deben usar)
const dolarAldia = {}

const dia = 'martes'

dolarAldia[dia] = 250

console.log(dolarAldia)

console.log(dolarAldia['lunes']) //acá nos muestra que si cambia el valor de dia (como día es martes y se está consultando lunes) mandará error tirando el código 

//Metodos de objetos

const estudiante = {
    nombre:'Antonio',

    calificacion : 12.2,
    darCalificacion : function(){
        console.log('line:75',this.calificacion);
    }
}

estudiante.darCalificacion()

estudiante['darCalificacion'] = function(){
    console.log('line:81',8)
}

estudiante.darCalificacion()

//Podemos acceder a propiedades de otros objetos por fuera de mi objeto 

const maestro = {
    nombre: 'Ricardo',
    darCalificaciones: function () {
        console.log('La califiación de mi estudiante',estudiante.nombre,'es: ', estudiante.calificacion)
    } 
}
maestro.darCalificaciones()

const persona1 = {
    nombre:'pedro'
}
// const persona2 = {
//     nombre:'pedro'
// }

const persona2 = persona1

persona2.nombre = 'Mario'

console.log(persona1 === persona2)

//vamos ahora a cambiar la referencia sustituyendo el objeto a lo 

let persona3 = {
    nombre:'pedro'
}

let persona4 = persona3

//Aqui se destruye persona 4 y se vuelve a crear

persona4 = {... persona4, nombre:'pedro'}

console.log(persona3 === persona4)


// const otroAnimal= {...animal, nombre:'perro'}
// console.log(otroAnimal)
// console.log(otroAnimal.nombre)

