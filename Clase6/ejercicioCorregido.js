const phrase = 'La mejor forma de predecir el futuro es creandolo'


const ex3 = (text)=>{
    const arreglo = text.split(' ')
    const array = []
    for (let i=0; i< arreglo.length;i++){
        if (arreglo[i].length<=3){
            arreglo.splice(arreglo[i],1)
        }
        array.push(arreglo[i])
    }
    return array.join(' ')
}