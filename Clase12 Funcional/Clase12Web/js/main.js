console.log('js conectado')
// Métodos de selección de DOM

//Selección por ID

/*El método getElementById recibe como arg el id del elemento que queremos seleccionar, y devuelve un elemento de DOM, que representa al elemento seleccionado */
let kodersList = document.getElementById('koders-list')
console.log(kodersList)

//Selección por clase
/* El método getElementsByClassName, recibe como argumento el nombre de una clase y devuelve todos los elementos de DOM que tengan esa clase dentro de 
su classList. el valor de retorno es una HTMLCollection */

let listGroupItems = document.getElementsByClassName('list-group-item')

console.log(listGroupItems)


/*Selección por tagname */

let listItems = document.getElementsByTagName('li')

console.log(listItems)
/*querySelector devuelve el primer elemento que encuentre en el DOM que compla con la clase provesta como argumento */
let firstKoderItem = document.querySelector('#koders-list .list-group-item')
console.log(firstKoderItem)


/*querySelectorAll devuelve todos los elementos que existen en el DOM y que cumplan con el selector provisto. Devuelve
una NodeList */
let koderItemElements = document.querySelectorAll('#koders-list .list-group-item')
console.log(koderItemElements)