//Forma 1: Debe filtrar por categoría conforme voy escribiendo en el campo 
//Forma 2: El campo debe ser un <select> cuyas opciones son las categorías que existen actualmente en la lista de productos
let products = []

let createProduct = document.getElementById('createElement')

createProduct.addEventListener('click', event => {
    event.preventDefault()
    console.log('click')
    let inputList = document.querySelectorAll('#productForm input')
    let productObject = {}

    inputList.forEach((element) => {
        productObject[element.name] = element.value
    })
    products.push(productObject)
    console.log(products)
    printProducts(products, 'wrapper')
})

let createCardProduct = (dataObjectProduct) => {
    let { nombre, descripcion, precio, imagen } = dataObjectProduct

    let divisor = document.createElement('div')
    divisor.classList.add('card')
    divisor.setAttribute('style', 'width: 18rem')
    divisor.setAttribute('id', 'divisor')

    let image = document.createElement('img')
    image.classList.add('card-img-top')
    image.setAttribute('src', imagen)

    let divisor1 = document.createElement('div')
    divisor1.classList.add('card-body')

    let title = document.createElement('h5')
    title.classList.add('card-body')
    let titleText = document.createTextNode(nombre)
    title.append(titleText)

    let pragraph = document.createElement('p')
    pragraph.classList.add('card-text')
    let pragraphText = document.createTextNode(descripcion)
    pragraph.append(pragraphText)

    let pragraph1 = document.createElement('p')
    pragraph1.classList.add('card-text')
    let pragraph1Text = document.createTextNode(`$${precio}MXN`)
    pragraph1.append(pragraph1Text)

    divisor1.append(title, pragraph, pragraph1)
    divisor.append(image, divisor1)

    return divisor

}


const printProducts = (someArr, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)

    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild)
    }

    someArr.forEach((product) => {
        let prodcutos = createCardProduct(product)
        wrapper.append(prodcutos)
    })


}



let buttonSearch = document.getElementById('buttonSearch')
let inputSearch = document.getElementById('inputSearch')

buttonSearch.addEventListener('click', (event) => {

    let busqueda = inputSearch.value
   console.log(busqueda) //me da el texto completo del input
 



})