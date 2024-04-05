let decirHola = (nombre, darApellido) => {
    console.log('hola',nombre(),darApellido())
}
let DarNombre = () =>'pedro'
let DarApellido = () =>'Ruiz'

decirHola(DarNombre,DarApellido)