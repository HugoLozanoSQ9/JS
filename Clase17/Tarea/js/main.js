const getData = async()=>{
    //promesa --> await --> promesa cumplida --> muestra la info de la promesa
    let response = await fetch ('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json')

    //También es una promesa --> await --> promesa cumplida y brinda los datos por el método JSON 
    let data = await response.json()

    //console.log(data)

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves
    let values = Object.values(data) //Me devuelve un array de unicamente las llaves
   
    let kodersArray = keys.map((key)=>{
        return {...data[key],key}
    })

    //return console.log(kodersArray)
   
}

const postKoder = async (koderObject) =>{

    let response = await fetch ('https://javascript-primera-base-default-rtdb.firebaseio.com/koders/.json',{
        method:'POST',
        body: JSON.stringify(koderObject)
    })
    let data = await response.json()
    console.log(data)

}

let boton = document.getElementById('postKoder')
let koders = []

boton.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log('Click')
    let inputList = document.querySelectorAll('#koderForm input')
    let object = {}
    inputList.forEach((input)=>{
        object[input.name] = input.value
    })
    
    postKoder(object)

    koders.push(object)
    printKodersList(koders,'lista')

})

console.log(koders)

const createKoderItem = (koderObject) =>{
    let {name,lastName} = koderObject
    let koderFullName = `Tu nombre completo es :${name} ${lastName}`

    let koderListItem  = document.createElement('li')
    koderListItem.classList.add('list-group-item')

    let koderItemText = document.createTextNode(koderFullName)
    koderListItem.append(koderItemText)
    
    return koderListItem


}

printKodersList = (kodersArray , wrapperId)=>{
    let wrapper=document.getElementById(wrapperId)
    kodersArray.forEach ((koder) =>{
        let koderItem = createKoderItem(koder)
        console.log(koderItem)
        wrapper.append(koderItem)
    })
}

//Para usar mi postKoder debo de ejecutar la función sin la key, unicamente los valores necesarios para crear un nuevo koder

//postKoder({name:'Some Name', lastName:'Some LastName'})









//getData() //ejecuta la función que me trae los datos del objeto 







/*for (key in data){
        console.log(key)
        console.log(data[key])
}
*/

/*

 let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves
    let values = Object.values(data) //Me devuelve un array de unicamente las llaves
   
    let kodersArray = keys.map((key)=>{
        return {...data[key],key}
    })

    return console.log(kodersArray)
*/