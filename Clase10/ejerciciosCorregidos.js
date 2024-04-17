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

const getAgeAverage = (dataArray) =>{
    let total = dataArray.reduce((accum,current)=>{
        return accum + current.edad
    },0)
    let ageAverage = total / dataArray.length
    return ageAverage
}

const getAgeAverage1 = (dataArray) =>{
    let ageAverage = dataArray.reduce((
    accum,current)=>accum + current.edad / dataArray.length
    ,0)
    return ageAverage
     
}

//console.log(getAgeAverage(canes))

const getDogsByCountry = (dataArray,country)=>{
    let result = dataArray.filter(
    (dog) => dog.pais.toLowerCase() === country.toLowerCase()
    )

    if (!result.length){
        return `No hay perros que pertenezcan a ${country}`
    }else{
        return result
    }
}

// console.log(getDogsByCountry(canes,'Ecuador'))
// console.log(getDogsByCountry(canes,'China'))
const getZipCodes = (dataArray) =>{
    let result = dataArray.map (dog => dog.direccion.codigoPostal)
    return result
}

//console.log(getZipCodes(canes))

const getCountryList = (dataArray) =>{
    let result = dataArray.reduce ((accum,current) =>{
    return accum.includes(current.pais) ? accum : [...accum, current.pais]
    },[])
    return result
}

console.log(getCountryList(canes))

