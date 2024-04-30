const otroProducto = document.getElementById('otroProducto')
const quitarProducto=document.getElementById('quitarProducto')
const boton= document.getElementById('guardar')

let agregarProducto = otroProducto.addEventListener('click',(event)=>{

    event.preventDefault()

    input = document.createElement('input')
    input.classList.add("form-control",'mb-3')
    input.setAttribute('name', 'producto');
    const contenedor = document.getElementById('productContainer')
    contenedor.append(input)


    console.log('click')
})

let quitarProductobtn = quitarProducto.addEventListener('click',(event)=>{

    event.preventDefault()
    let editedInputs = document.querySelectorAll('#productContainer input')

    editedInputs.forEach((input)=>{
        if(input.value=='' || input.value== ' '){
            input.classList.add("d-none")
        }
        
    })


   // console.log('click')
})



let botonDeGuardado= boton.addEventListener('click',(event)=>{
    console.log('hola')
    
    let inputList = document.querySelectorAll('#foodForm input')
    let object = {}

    inputList.forEach((input) => {
        object[input.name] = input.value
    })
    let check = document.getElementById('pagos')
    if(check.checked){
        object.pagos='efectivo'
    }else{
        object.pagos='tarjeta'
    }
    
    postPedido(object)

    inputList.forEach((input)=>{
        input.value = ''
    })
})

const postPedido = async (Pedido) => {

    let response = await fetch('https://comanda-electronica-9882f-default-rtdb.firebaseio.com/control/.json', {
        method: 'POST',
        body: JSON.stringify(Pedido)
    })

    let data = await response.json()

    console.log(data)
    //getData() //Se ejecuta getData() para que cuando se postee un koder nuevo (se actualice con el nuevo registro en pantalla)
    //al momento de mandar el koder tengo que volver a recibir la info
}

