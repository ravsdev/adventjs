/*
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.

Veamos unos ejemplos:

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

El resultado tiene que ser un array con dos números.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?
*/

//SOLUCIÓN con bucles FOR anidados
function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let numPair = null
  
  mainFor: //Main for label
  for(let i = 0; i<numbers.length-1;i++){
  	for(let j = i+1; j<numbers.length;j++){
    	if(numbers[i]+numbers[j]===result){
      	numPair=[numbers[i],numbers[j]];
        break mainFor;
      }
    }
  }
  return numPair;
}

//SOLUCIÓN usando un Map Object
function sumPairs(numbers, result) {
  let hashMap = new Map(),
    pairs = [];

  numbers.forEach(num => {
    if (hashMap.has(num)) {
      //Si no hemos encontrado otro par que sume
      //o
      //El índice del que vamos a añadir es menor que el existente lo añadimos
      if (pairs.length === 0 || numbers.indexOf(hashMap.get(num)) < numbers.indexOf(pairs[0]))
        pairs = [hashMap.get(num), num];
    } else {
      //Si no hay un número en el Map añadimos el resultado menos el número
      hashMap.set(result - num, num);
    }
  })

  return pairs.length > 0 ? pairs : null;
}
