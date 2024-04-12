/*
1.- Necesitamos una lista con únicamente los nombres completos de cada usuario 
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos los nombres
Filtramos los apellidos
Concatenamos los nombres y apellidos 
Se realiza lo mismo con todos los usuarios 
regresamos la lista con los nombres y apellidos
fin 

2.- Necesitamos una lista con únicamente aquellos usuarios con genero 'Male'
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos el genero Male
Se realiza lo mismo con todos los usuarios 
si el genero es male entonces se agrega el usuario completo a la lista
si no  no hacemos nada
Se regresa una lista con los usuarios con genero 'Male'
fin 
3.- Necesitamos una lista con únicamente aquellos usuarios con genero 'Female'
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos el genero Female
Se realiza lo mismo con todos los usuarios 
si el genero es female entonces se agrega el usuario completo a la lista
si no  no hacemos nada
Se regresa una lista con los usuarios con genero 'Female'
fin 
4.- Necesitamos saber la edad promedio de los usuarios 
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos la edad
Se realiza lo mismo con todos los usuarios 
se guardan todas las edades en una lista
sumamos todas las edades y al final la dividimos por la candidad de edades
se devuelve la edad promedio 

5.- Necesitamos saber la mayor edad 
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos la edad
Se realiza lo mismo con todos los usuarios 
se guardan todas las edades en una lista
validamos cual es la edad más grande
se devuelve la edad mas grande

6.- Necesitamos saber la menor edad
Creamos una función que reciba como parámetro los usuarios
Creamos una lista vacía
Filtramos la edad
Se realiza lo mismo con todos los usuarios 
se guardan todas las edades en una lista
validamos cual es la edad más pequeña
se devuelve la edad mas pequeña

*/

const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
];

const listaDeNombresCompletos = (usuarios) =>{  //Ejercicio 1
    const listaDeNombresFinal = []
    for (let i = 0; i < usuarios.length;i++){
        const name = users[i].name;
        const lastName= users[i].lastname;
        const fullName = `${name} ${lastName}`
        listaDeNombresFinal.push(fullName)

    }
    return listaDeNombresFinal

}

const listaDeUsuariosMale = (usuarios) =>{//Ejercicio 2
    const listaDeUsrMale = []
    for (let i = 0; i < usuarios.length;i++){
        const gender = users[i].gender;
        
        if (gender == 'Male'){
            const genderUsr =users[i].name
            listaDeUsrMale.push(genderUsr)   
        }
    }
    return listaDeUsrMale
}

const listaDeUsuariosFemale = (usuarios) =>{ //Ejercicio 3
    const listaDeUsrFemale = []
    for (let i = 0; i < usuarios.length;i++){
        const gender = users[i].gender;
        
        if (gender == 'Female'){
            const genderUsr =users[i].name
            listaDeUsrFemale.push(genderUsr)   
        }
    }
    return listaDeUsrFemale
}

const promedioDeUsuarios = (usuarios) =>{  //Ejercicio 4
    const listaDeEdadesFinal= []
    let sumaDeEdades = 0 
    let promedio = 0
    for (let i = 0; i < usuarios.length;i++){
        const name = users[i].age;
        listaDeEdadesFinal.push(name)
    }
    for (let i = 0;i<listaDeEdadesFinal.length;i++){
        const edad = listaDeEdadesFinal[i] 
        sumaDeEdades +=edad
        
    }
    promedio = sumaDeEdades / usuarios.length
    return promedio
}

const edadMayor = (usuarios) =>{  //Ejercicio 5
    const listaDeEdadesFinal= []
    for (let i = 0; i < usuarios.length;i++){
        const name = users[i].age;
        listaDeEdadesFinal.push(name)   
    }
    let numMax = Math.max(...listaDeEdadesFinal)
    return numMax
}

const edadMenor = (usuarios) =>{  //Ejercicio 5
    const listaDeEdadesFinal= []
    for (let i = 0; i < usuarios.length;i++){
        const name = users[i].age;
        listaDeEdadesFinal.push(name)   
    }
    let numMin = Math.min(...listaDeEdadesFinal)
    return numMin
}

console.log(listaDeNombresCompletos(users))  //Ejercicio 1
console.log(listaDeUsuariosMale(users)) //Ejercicio 2
console.log(listaDeUsuariosFemale(users)) //Ejercicio 3
console.log(promedioDeUsuarios(users))// Ejercicio 4
console.log(edadMayor(users)) // Ejercicio 5
console.log(edadMenor(users)) // Ejercicio 6
