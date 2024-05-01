let card = document.getElementById('padreCard')

const getData = async () => {
    //promesa --> await --> promesa cumplida --> muestra la info de la promesa
    let response = await fetch('https://base-ejericio-c19-default-rtdb.firebaseio.com/.json')

    //También es una promesa --> await --> promesa cumplida y brinda los datos por el método JSON 
    let data = await response.json()

    //console.log(data)

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves

    let arr = keys.map((key) => {
        return { ...data[key], key }
    })

    console.log(arr)

    printCards(arr,'padreCard')

}


const postCard = async (objectCard) => {

    let response = await fetch('https://base-ejericio-c19-default-rtdb.firebaseio.com/.json', {
        method: 'POST',
        body: JSON.stringify(objectCard)
    })

    let data = await response.json()

    console.log(data)
    getData() //Se ejecuta getData() para que cuando se postee unkoder nuevo (se actualice con el nuevo registro en pantalla)
    //al momento de mandar el koder tengo que volver a recibir la info
}

let botonGuardar = document.getElementById('guardar')

botonGuardar.addEventListener('click',(event)=>{
    let inputList = document.querySelectorAll('#form input')
    cardObject ={}
    inputList.forEach((input)=>{
        cardObject[input.name] = input.value
    })
    postCard(cardObject)
})



let crearCard= (array)=>{

    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card','mb-3')
    cardDiv.setAttribute('style','width:;')

    let cardDiv1 = document.createElement('div')
    cardDiv1.classList.add('card-body')

    let titulo = document.createElement('h5')
    titulo.classList.add('card-title')
    titulo.innerText=`${array.titulo}`

    let autor = document.createElement('h6')
    autor.classList.add('card-subtitle', 'mb-2','text-body-secondary')
    autor.innerText=array.autor

    let contenido = document.createElement('p')
    contenido.classList.add('card-text')
    contenido.innerText=array.contenido

    cardDiv1.append(titulo,autor,contenido)
    cardDiv.append(cardDiv1)

    return cardDiv
}

let printCards = (array,wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    //Esto me elimina los elementos anteriores para dar paso a los nuevos
    wrapper.innerHTML = ''
    array.forEach((element) => {
        let card  = crearCard(element)
        wrapper.append(card)
    })
  
}


getData()
