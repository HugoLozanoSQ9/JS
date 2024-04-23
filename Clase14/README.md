# solución de la tarea

Puedo saber si existe algo dentro de un array y esto es el método find

Deconstruir: es extraer las propiedades específicas de un objeto let {name,avatar} = current (se extraen las propiedades de current (avatar y name para poder iterarlas))



Solución:  en solucion de itearación con objetos 

Actualización de saass: Si a un apropiedad padre se le aplica un 


si quiero 2 elementos en una sola linea se aplica un display: flex
si están desalineadas pongo un align items:center
y un gap para que se separen

Como esto ya existe en bootstrap se hace esto :
d-flex, gap-3, align-items-center
Para complementar:
border:1px solid red
border-raddius:.5rem 
pdding 1 rem
box-shadow 3px 3px 3px


En bootstrap:
border, border-secondary, shadow, rounded, p3

los elementos h por defecto traen un margin bottom por lo que a los h se le puede quitar y queda nás alineado :D!

La propagación saca los elementos de donde estén si están en una lista, saca los elementos de la lista uno por uno y podemos hacer algo con ellos (son cada uno de los elementos no otra lista )


## Eventos

A esto se le conoce como event listeners

Todos los handles tienen un argumento llamado event
a su ves ese argumento guarda un objeto con los eventos que han aparecido actualmente 
pero la propiedad más importante es target, dado que me va a mostrar específicamente la etiqueta que fue alterada por el evento
quedaría de la siguiente forma
clg(event) //objeto
clg (event.target) //propiedad del objeto event
clg(event.target.value) //lo que se está escribiendo en ese input
-----------------------

.innerText sirve para obtener el texto que tiene una etiqueta yse puede igualar a lo que deseamos

elemnetById('Id con etiqueta').innerText = variable con event.target.value (lo que tenga el input)




## Paso a paso

-Escibir algo en el input
-Eliminar lo que ya está escrito 
-Obtengo el texto escrito en el input
-Itroduzco el texto escrito en el input


Se puede sacar lo que ya trae un input desde su value y se entra al value con su propiedad inputName.value


