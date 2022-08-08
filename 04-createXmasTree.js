/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios.
Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

//SOLUCIÓN
function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree='\n';
  let tronco = 0;
  const width = height * 2 - 1;
  let line = 1;
  let asteriscos = 1;
  for(let i = 0;i<height;i++){
   	let spaces = width - asteriscos;
    let repeats = Math.floor(spaces/2)
    tree+='_'.repeat(repeats)
    tree+='*'.repeat(asteriscos)
    tree+='_'.repeat(repeats)
    tree+='\n'
    asteriscos+=2; 
  }
  
  //Tronco
  for(let i=0;i<2;i++){
    tree += '_'.repeat(Math.floor(width/2));
    tree += '#';
    tree += '_'.repeat(Math.floor(width/2))+'\n';
  }
  return tree.trim()
}
