# dataset
se pueden crear y asignar attributos personalizados con el prefijo data
por ejemplo:
<div data-source-url = 'some-url'> </div>
esto al momento de querer visualizarlo en los evntos de la etiqueta aparece lo siguiente: event.target.dataSet 
y automáticamente nos crea un objeto el cual es llave:  data-source-url y valor: 'some-url'
{
    data-source-url : 'some-url'
}