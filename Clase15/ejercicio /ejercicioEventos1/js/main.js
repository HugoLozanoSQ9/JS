/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */
 
let createPersonButton=document.getElementById('create-person')

createPersonButton.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log('click')

  let inputList = document.querySelectorAll('#person-form input')

  //console.log(inputList)
  let personObj={}

  inputList.forEach((input)=>{
  personObj[input.name] = input.value
  })
  console.log(personObj)
})

