const  separateClassNames = (classNamesString) =>{
    return classNamesString.split(" ")
}

// se debe ocupar con : ...separateClassNames( se le indican las clases a establecer como se crearon en un inicio)

console.log(...separateClassNames("card-subtitle mb-2 text-body-secondary"))
