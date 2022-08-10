/*
¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y
nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

*/

//SOLUCIÓN
function missingReindeer(ids) {
  //Creamos un array de valores dada la longitud del array ids
  let expectedIds = [...Array(ids.length).keys()];
	let idFound=null;
  
  //Hacemos una intersección de los dos arrays
  //Filtra los elementos que no están en el array expectedIds
  //Puesto que nos devuelve un array, obtenemos el único elemento que falta [0]
  idFound=expectedIds.filter(id=>!ids.includes(id))[0];

  //Si no ha devuelto ningún valor devolvemos el último id (expectedIds.length)
  return idFound!=null?idFound:expectedIds.length;
}
