
let decirHola = (nombre,apellido) =>{
    console.log('hola', nombre(), apellido())
}

let darNombre = () => 'pedro'
let darApellido = () => 'Ruiz'
decirHola(darNombre, darApellido)



