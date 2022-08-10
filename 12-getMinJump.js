/*
En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada...
😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
 Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

 Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2


La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos
serviría para sortear todos los obstaculos.
*/

//SOLUCIÓN
function getMinJump(obstacles) {
  //Ordenamos el array de obstáculos
  const sortedObstacles = obstacles.sort((a,b)=>a-b);
  
  //Obtenemos la última posición
  const lastPosition=sortedObstacles.slice(-1)[0];
  
  let jumpLength=1;
  //let positions = [...Array(lastPosition).keys()];
  
  //Devuelve un array con las posiciones del salto
  const getPositions=(step)=>{
    let arr=[]
    for(let i = 0; i<=lastPosition;i+=step){
  	arr.push(i);
    }
    return arr;
  }
  
  while(jumpLength<=lastPosition){
    //Si alguna de las posiciones se encuentra en el array de obstáculos
    //incrementamos el salto en uno
    if(getPositions(jumpLength).some(pos=>obstacles.includes(pos))){
    	jumpLength++;
    }else{
     //Si las posiciones del salto no están en el array de obstáculos
     //finalizamos el bucle
   	break;
    }
   }
  return jumpLength;
}


//SOLUCIÓN usando filter
function getMinJump(obstacles) {
  let jumpLength = 1;
  //Obtenemos la última posición
  const lastPosition = obstacles.sort((a, b) => a - b).slice(-1)[0];

  let positions = [...Array(lastPosition + 1).keys()];
  positions.shift(); //Removes 0 from array

  //Devuelve un array con las posiciones del salto
  const getPositions = (step) => {
    let arr = []
    for (let i = 0; i <= lastPosition; i += step) {
      arr.push(i);
    }
    return arr;
  }
  return positions.filter(el => !getPositions(el).some(pos => obstacles.includes(pos)))[0];
}
