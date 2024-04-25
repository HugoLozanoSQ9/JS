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

persons = []


createPersonButton.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log('click')

  //Con esto podemos seleccionar todos los inputs que tengan el Id. person-form
  let inputList = document.querySelectorAll('#person-form input')

  //console.log(inputList)
  let personObj={}

  inputList.forEach((input)=>{
  personObj[input.name] = input.value
  })

  persons.push(personObj)  

  printList(persons,'wrapper')

})

let createList = (personData) =>{
  let {fullName,email,passwrd} = personData
  let li = document.createElement("li")
  li.classList.add('list-group-item')
  let liText = document.createTextNode(`Nombre completo: ${fullName} correo: ${email} password: ${passwrd}`);
  li.append(liText)
  return li
 }
 
 const printList = (someArr,wrapperId)=>{
   let wrapper = document.getElementById(wrapperId)

   while(wrapper.firstChild){
    wrapper.removeChild(wrapper.firstChild)
   }


   someArr.forEach((person)=>{
     let list = createList(person)
     wrapper.append(list)
  })
 }

