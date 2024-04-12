const listaNombres=['Hugo Lozano Rivera', 'Juan Lozano Rivera', 'Sebastian Lozano Rivera', 'Israel Salinas Martinez']

const ruleta1 = (lista) =>{
    if(lista.length == 0){
        console.log('Tu lista está vacía, por favor ingresa datos ')
    }else{
        let randomName = listaNombres[Math.floor(Math.random() * lista.length)]
        return randomName
    }
}

const quitarNombre = (nombre,lista) =>{
    lista.splice(lista.indexOf(nombre), 1)
    return lista
}



console.log(`Hola el nobre eliminado fue: ${ruleta1(listaNombres)} y la lista quedo de la siguiente forma: ${quitarNombre(ruleta1(listaNombres),listaNombres)}`)
