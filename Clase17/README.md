# Datos en internet
¿Qué es un full-stack?
Un full-stack es quien domina el front y el back 

Front: Todo lo que ve el usuario (interfaz visual) --> Lo que está del lado del cliente

Back: Bases de datos, peticiones (todo lo que está del lado del server) --> Es toda la información que se muestra en el back 

API : sabe donde se encuentran ubicados los datos y los puede proporcionar y a su vez saber si tienes el permiso para tenerlos / verlos / usarlos

Peticiones: 

A -->  Create, Read, Update, Delete --> B

Esto genera el término CRUD

CMS: Content Managment System 

(Plataforma de manejo de contenidos) Donde se crean usuarios etc...

Cada acción tiene un método:

Create --> post
Read --> Get
Update --> puth / Patch
Delete --> Delete

## Asincronía

Js por defecto es asincrono, por lo que el siguiente script por defecto va a dar 10

let a = 10

setTimeout(function(){
    
    a +=10
    
},1000)

console.log(a)

Dado esto cuando se requiera que se ejecute algo despues de cierto tiempo se tiene que hacer uso de una función asincrona (que la función espere a ser ejecutada)

## Promesas:
son partes de código que se van a cumplir en algún momento pero no sabemos cuando 

si ocupamos un await --> procederá a esperar los datos y resolvemos la promesa (esperar a que se cumpla la promesa)
la forma de ingresar a la bd es la siguiente: 

const getKoders = async()=>{

    let response = await fetch ('https://javascript-primera-base-default-rtdb.firebaseio.com/.json')

    let koders = await response.json()

    console.log(koders)
}  


# For In
for (key in data){
        console.log(key)
        console.log(data[key])
}
key --> es la llave del objeto
data --> es el objto entero

para poder acceder a la propiedad de la llave debemos ocupar data[key] (objeto[llave]) esto lo hace dinámico