## Pensamiento estructurado

Normalmente tenemos un pensamiento aleatorio, debemos primero organizar las ideas y tener TODAS las características a realizar para poder lograr llegar a la solución correcta. 

Definición del problema

Es la expresión inicial del problema a resolver 

(Eliminar las palabras cortas de una frase)

Se requiere crear una funcionalidad que reciba cualquier frase, de cualquier longitud y cantidad de palabras, y esta funcionalidad debe entregar como resultado una nueva grase que no contenga las palabras identificadas como cortas, considerando una palabra corta como aquella que tenga 3 o menos caracteres.

Análisis del problema: 
Se observan todas las posibles variantes e implicaciones derivadas de la definición inicial 

¿Qué significa una palabra corta?
¿Cuál es la frase que se va a trabajar?
¿Siempre será la misma frase?
¿A que nos referimos con eliminar?
¿Cuál es el idioma de la frase?
¿Qué se espera como reslutado?


Definición de herramientas:

En esta etapa se identifican las herramientas que podrían ser potencialmente usadas para resolver el problema

Frase = String
Funcionalidad = función 
condicional si o no = if 
repetición palabra x palabra = bucle 

Funciones:

Función flecha
Función convencional 
Función constructora

Frase:
let 
const 
var

condicionales:
if
switch
else
operador ternario

bucles: 
for 
do while
while 
map 
filter
reduce
for each
for of
for in 

Analisis de las herramientas: 

En esta etapa, se determina cuáles son las herramientas que interactúan entre sí, cuáles podrían ser las más adecuadas para resolver el problema de acuerdo a la definición del mismo, y cuáles serían descartadas.

Al momento de discriminar entonces tenemos lo siguiente:

Función: Función flecha
variable : Const y let.
condicionales: operador ternario 
ciclos: for o forEach o filter o reduce

Definición de soluciones: 
En esta parte se plantean las posibles soluciones con base en las herramientas seleccionadas

Solución A

-Crear una función que reciba la frase 
-Crear una lista donde guardaremos las palabras que no son cortas
-Dividir la frase en palabras
-Usar un ciclo for, para recorrer palabra por palabra
-Evaluar cada palabra para determinar si es corta o no 
    -Si la palabra es corta, la descartamos
    -Si no es corta  la agregamos a la lista secundaria
Después de haber recorrido todas las palabras, juntamos la lista secundaria en una sola frase
-Devolvemos la frase resultante

Solución B 
-Crear una función que reciba la frase 
-Crear una variable que guardará la frase resultante 
-Dividir la frase en palabras
-usaremos reduce para recorrer la lista de plabaras y crear el resultado
    si la palabra es corta, se descarta
    si la palabra no es corta, se agrega al resultado
-Devolvemos el resultado.

Analisis de soluciones:

En esta etapa se evaluan los pros y contras de cada solución propuesta y se determina la solución a implementar



1.-Que es?
2.-Para que sirve? 
3.-Como funciona?
