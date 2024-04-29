const getData = async () => {
    //promesa --> await --> promesa cumplida --> muestra la info de la promesa
    let response = await fetch('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json')

    //También es una promesa --> await --> promesa cumplida y brinda los datos por el método JSON 
    let data = await response.json()

    //console.log(data)

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves
    let values = Object.values(data) //Me devuelve un array de unicamente las llaves

    let kodersArray = keys.map((key) => {
        return { ...data[key], key }
    })

    console.log(kodersArray)

    printKodersList(kodersArray, 'lista')
    //Se usa la función para que al momento de obtener la date se muestre en pantalla con el arreglo de kodersArray 
}


const postKoder = async (koderObject) => {

    let response = await fetch('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json', {
        method: 'POST',
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    //    console.log(data)
    getData() //Se ejecuta getData() para que cuando se postee un koder nuevo (se actualice con el nuevo registro en pantalla)
    //al momento de mandar el koder tengo que volver a recibir la info
}

const deleteKoder = async (koderKey) => {

    let response = await fetch(`https://javascript-primera-base-default-rtdb.firebaseio.com/koders/${koderKey}.json`,
        {
            method: 'DELETE'
        }
    );

    let data = await response.json()

    console.log(data)

    getData()
}

const editKoder = async (koderKey,koderObject)=>{
    let response = await fetch(`https://javascript-primera-base-default-rtdb.firebaseio.com/koders/${koderKey}.json`,
        {
            method: 'PUT',
            body:JSON.stringify(koderObject)
        }
    );
    
    let data = await response.json()
    
    getData(data)
}
// definición de la modal 
const editModal = new bootstrap.Modal(document.getElementById('edit-koder-modal'))

let boton = document.getElementById('postKoder')

//boton para guardar lo del formulario
boton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click')
    let inputList = document.querySelectorAll('#koderForm input')

    let object = {}
    inputList.forEach((input) => {
        object[input.name] = input.value
    })

    postKoder(object)

    inputList.forEach((input) => {
        input.value = ''
    })



})

//Boton para editar el koder

let saveChangesBtn = document.getElementById('saveChanges')

saveChangesBtn.addEventListener('click',async(event)=>{
    console.log('guardando cambios')
    let key = event.target.dataset.koderKey
    let editedInputs = document.querySelectorAll('#edit-koder-modal input')
    let editKoderObj ={}
    editedInputs.forEach((input)=>{
        editKoderObj[input.name]=input.value
    })
    await editKoder(key,editKoderObj)
    
    editModal.hide()
    //console.log(editKoder)

})

const createKoderItem = (koderObject) => {
    let { name, lastName, key } = koderObject
    let koderFullName = `${name} ${lastName}`
    
    let koderListItem = document.createElement('li')
    koderListItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center','gap-3')

    let koderItemText = document.createElement('span')
    koderItemText.classList.add('flex-grow-1')
    koderItemText.innerText = koderFullName

    koderListItem.append(koderItemText)


    //Boton de editar koder 
    let editBtn = document.createElement('button')
    editBtn.classList.add('btn', 'btn-primary', 'text-center')
    editBtn.innerHTML = "&#x270E;"

    editBtn.addEventListener('click',(event)=>{
        console.log('editing')
        console.log(koderObject)
        //Uso de la modal
        editModal.show()
        document.getElementById('editName').value= name
        document.getElementById('editLastName').value= lastName
        document.getElementById('saveChanges').dataset.koderKey= key
       
    })

    //Boton de eliminar
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-danger', 'text-center')
    deleteBtn.innerText = 'X'

    deleteBtn.addEventListener('click', async (event) => {
        await deleteKoder(key)
        location.reload()
        
    })
    koderListItem.append(editBtn,deleteBtn)

    return koderListItem

}

let printKodersList = async (kodersArray, wrapperId) => {

    let wrapper = document.getElementById(wrapperId)
    //Esto me elimina los elementos anteriores para dar paso a los nuevos
    wrapper.innerHTML = ''
    kodersArray.forEach((koder) => {
        let koderItem = createKoderItem(koder)

        wrapper.append(koderItem)
    })

}

getData()
