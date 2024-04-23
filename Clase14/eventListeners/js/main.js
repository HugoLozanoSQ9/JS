/*Para los listeners se van a ocupar 3 cosas principales:

¿Quién?  Todos los koders (el elemento que recibe la acción)
¿Cuando?  Al escuchar su nombre 
¿Qué?   Dirán Hola

elements(s).addEventListener(event,handler o callback)

elements.addEventListener => ¿Quién? (el método agrega los listeners)
event => ¿Cuando? (click, presionar teclas etc...)
handler o callback => ¿Qué? es lo que se verá

*/

/*¿Quien va a escuchar el evento?  */

let testButton = document.getElementById('testButton')
/* 
testButton.addEventListener => ¿Qué? 
'click' =>¿Cuando?
()=> {
    alert('Hola Koders')
}) => ¿Qué?

*/
testButton.addEventListener('click', ()=> {
    alert('Hola Koders')
})


/*
Existen 3 eventos similares

keydown (cuando aprieto la tecla) acepta cualquier tecla 
keypress (cuando presiono la tecla ) acepta solo las teclas que tengan un valor 
keyup (cuando dejo de apretar la tecla)

*/