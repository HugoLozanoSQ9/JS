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

Ex. 1
const getDogYears1 = (dogsArray) =>{
    let result = dogsArray.map((dog)=>{
        //console.log('dog',dog)
        return {...dog, edad:dog.edad*7}

    })
    console.log('result',result)
}

getDogYears1(canes)
*/

const getDogYears = (dogsArray) => dogsArray.map((dog)=>({...dog, edad:dog.edad*7}))

//getDogYears(canes)

const getVaccinatedDogs = (dogsArray) =>{
    let total = 0

    dogsArray.forEach(dog => {
        if(dog.vacunado)total ++
    })

    return total
}
console.log(getVaccinatedDogs(canes))
/*
const getDogAddress = (dogsArray) =>{
    let resultado = dogsArray.map((dog)=>{
        let address = `${dog.nombre}: ${dog.direccion.calle} #${dog.direccion.numero} ${dog.direccion.colonia} ${dog.direccion.codigoPostal}`
        return address
    })
    return resultado
}
console.log(getDogAddress(canes))
*/
const getDogAddress = (dogsArray) =>{
    return dogsArray.map((dog)=>{
        let {nombre, direccion} = dog //Destructuración
        let {calle,numero,colonia,codigoPostal} = direccion
        return `${nombre}: ${calle} #${numero} ${colonia} ${codigoPostal}`
    })
}


//console.log(getDogAddress(canes))

const changeCaccinateValue = (dogsArray) => 
    dogsArray.map((dog) =>({...dog, vacunado:dog.vacunado ? 'Si':'No'})

)
console.log(changeCaccinateValue(canes))