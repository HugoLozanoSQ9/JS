let decirHola = (nombre) => {
    console.log('hola',nombre())
    nombre = () => 'Juan'
    console.log(nombre())
}
decirHola(() =>'pedro')
