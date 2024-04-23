const  separateClassNames = (classNamesString) =>{
    return classNamesString.split(" ")
}

// se debe ocupar con : ...separateClassNames( se le indican las clases a establecer como se crearon en un inicio)

console.log(...separateClassNames("col-12 col-md-6"))
console.log(separateClassNames("col-12 col-md-6"))
console.log(`Hola ${separateClassNames("col-12 col-md-6")}`)