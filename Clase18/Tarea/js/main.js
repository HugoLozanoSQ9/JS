const getOrders = async () => {
    //promesa --> await --> promesa cumplida --> muestra la info de la promesa
    let response = await fetch('https://comanda-electronica-9882f-default-rtdb.firebaseio.com/control/.json')

    //También es una promesa --> await --> promesa cumplida y brinda los datos por el método JSON 
    let data = await response.json()

    //console.log(data)

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves
    let values = Object.values(data) //Me devuelve un array de unicamente las llaves

    let orderArray = keys.map((key) => {
        return { ...data[key], key }
    })

    console.log(orderArray)

    printCards(orderArray, 'card-wrapper')

    //printKodersList(kodersArray, 'lista')
    //Se usa la función para que al momento de obtener la date se muestre en pantalla con el arreglo de kodersArray 
}

const editOrder = async (orderKey, orderObject) => {
    let response = await fetch(`https://comanda-electronica-9882f-default-rtdb.firebaseio.com/control/${orderKey}.json`,
        {
            method: 'PATCH',
            body: JSON.stringify(orderObject)
        }
    );

    let data = await response.json()

    getOrders(data)
}

const completeOrder = async (objKey) => {

    let response = await fetch(`https://comanda-electronica-9882f-default-rtdb.firebaseio.com/control/${objKey}.json`,
        {
            method: 'DELETE'
        }
    );

    let data = await response.json()

    console.log(data)

    getOrders()
}
const editModal = new bootstrap.Modal(document.getElementById('editOrderModal'))

const createCard = (orderArray) => {

    let { mesa, nombre, pagos, producto, total, key } = orderArray



    let cardTypeClass = document.createElement('div')
    cardTypeClass.classList.add('card', 'col', 'col-md-6', 'col-lg-4', 'd-flex', 'gap-1')

    let cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    //agregar header por arg.
    cardHeader.append(nombre)



    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.append(`Número de mesa: ${mesa}`)
    //agregar h5 mediante arg


    let cardParagraph = document.createElement('p')
    cardParagraph.classList.add('card-text')
    cardParagraph.append(`productos: ${producto}`)
    //agregar p mediante arg

    let cardParagraph2 = document.createElement('p')
    cardParagraph2.classList.add('card-text')
    cardParagraph2.append(`total: $${total}`)

    let cardParagraph3 = document.createElement('p')
    cardParagraph3.classList.add('card-text')
    cardParagraph3.append(`tipo de pago: ${pagos}`)

    let completeButton = document.createElement('button')
    completeButton.classList.add('btn', 'btn-danger', 'boton', 'align-self-center', 'mb-3')
    completeButton.innerText = 'Pedido completado'
    completeButton.addEventListener('click', async (event) => {
        console.log('completando')
        await completeOrder(key)
        location.reload()
    })

    let editButton = document.createElement('button')
    editButton.classList.add('btn', 'btn-success', 'boton', 'align-self-center', 'mb-3')
    editButton.innerText = 'editar pedido'
    editButton.addEventListener('click', (event) => {
        console.log('editando pedido')
        editModal.show()
    })

    editButton.addEventListener('click', async (event) => {
        
        document.getElementById('editProduct').value = producto
        document.getElementById('editNombreDelCliente').value = nombre
        document.getElementById('editNumeroDeMesa').value = mesa
        document.getElementById('editTotal').value = total
        document.getElementById('editPagos').checked = pagos
        document.getElementById('saveChanges').dataset.orderKey=key

    })



    cardTypeClass.append(cardHeader, cardTitle, cardParagraph, cardParagraph2, cardParagraph3, completeButton, editButton)
    return cardTypeClass

}

let saveChangesButton = document.getElementById('saveChanges')

saveChangesButton.addEventListener('click', async (event) => {
    let editInputList = document.querySelectorAll('#foodFormModal input')
    let editObject = {}
    editInputList.forEach((editInput) => {
        editObject[editInput.name] = editInput.value
    })
    let check = document.getElementById('editPagos')
    
    check.checked ? editObject.pagos = 'efectivo' : editObject.pagos = 'tarjeta'
    let key = event.target.dataset.orderKey
    await editOrder(key, editObject)
    editModal.hide()

})




let printCards = async (orderArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    //Esto me elimina los elementos anteriores para dar paso a los nuevos
    wrapper.innerHTML = ''
    orderArray.forEach((order) => {
        let orderItem = createCard(order)

        wrapper.append(orderItem)
    })
}



getOrders()

function recargarSitio() {
    setTimeout(function () {
        location.reload();
    }, 6000); // 6000 milisegundos = 6 segundos
}

// Llama a la función para que comience a recargar el sitio
//recargarSitio();

