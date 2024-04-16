# For Each  y map

For each es una solución generica. 

.map se ocupa para soluciones específicas D:!


# Filter

Filter sirve para filtrar a corde a las acciones que voy a ejecutar a través del anaálisis del ejercicio


Se puede tener un array de nombres 
const nombres = [
    'Sky',
    'milton',
    'boris',
    'milo'
]

Crea una nueva lista que contenga unicamente aquellos nombres con más de 3 letras

retorna: 
[
    'milton',
    'boris',
    'milo'
]

# Reduce

let canes = [
    {
        nombre : 'Rex', 
        edad : 5
    },
    {
        nombre : 'Max', 
        edad : 9
    },
    {
        nombre : 'Bella', 
        edad : 3
    }
]

Necesitamos saber la edad promedio de los perros
canes.reduce(callback, valorInicial ) // el tipo de dato que se indique en valorInicial es el tipo de dato que nos va a regresar

let result = canes.reduce((acumulador, current/item, index, array)=>{
    return acumulador + current.edad
},0)

El acumulador sería el contador (iterador) (en la primera iteración el acumulador toma el valor del valor inicial)
En la siguiente iteración el acumulador se convienre al valor del return 

# find
recorre buscando la propiedad que pongamos y el primero que encuentre lo va a devolver como resultado XD

# Some
busca si alguno cumple cierta condición

# every 
Me ermite saber si todos los elementos del array están vacunados 