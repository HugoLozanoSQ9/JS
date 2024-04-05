let decirHola = (nombre) => {
    
    console.log('Hola',nombre)
}

decirHola('pedro')

decirHola = (nombre,apellido) =>{
    console.log('hola', nombre, apellido)
}

let darNombre = () => 'pedro'

decirHola(darNombre, 'Ruiz')


const sumar = (a,b) => {
    return a + b
}

const sumar1 = (a,b) => a+b

console.log(sumar(2,3))


const juan = {
    'edad':12,
    decirEdad: function(){
        console.log(this.edad)
    }
}
juan.decirEdad()