/*
Se están preparando las rutas para el trineo de Santa 🎅.
Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

    Un número con la capacidad máxima de regalos en el trineo.
    El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
        trip[0] = número de regalos a transportar
        trip[1] = punto de recogida de los regalos
        trip[2] = punto de entrega de los regalos 

La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero...
¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

Lo mejor es que veamos un ejemplo:

canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos

Lo difícil, e importante, es que entiendas que Santa Claus va entregando y recogiendo regalos y que a veces eso puede hacer que supere la carga máxima.

*/


//SOLUCIÓN usando arrays como estructura
function canCarry(capacity, trip) {
  const numGifts = [];
  const getGifts = [];
  const giveGifts = [];
  
  //Separamos el 'trip' en tres arrays, con las posiciones de recogida,
  //entrega y el número de paquetes que se recogen
  trip.forEach(el=>{
  	numGifts.push(el[0]);
    getGifts.push(el[1]);
    giveGifts.push(el[2]);
  })

  let result = true;
  let gifts = 0;

  for (let pos = getGifts.at(0); pos < giveGifts.at(-1); pos++) {
    //Hay que tener en cuenta que la misma posición se pueden dejar y coger reagalos
    //Si estamos en la posición de dejar los regalos, nos quedamos a 0
    if (giveGifts.indexOf(pos) !== -1) {
      gifts = 0;
    }

    //Si la posición actual es de recogida comprobamos que no sobrepasemos
    //la capacidad
    const getGifPos = getGifts.indexOf(pos);
    if (getGifPos !== -1) {
      gifts += numGifts.at(getGifPos);
      if (gifts > capacity) {
        result = false;
        break;
      }
    }
  }

  return result
}

//SOLUCIÓN usando un Map como estructura
export default function canCarry(capacity, trip) {
  const tripMap = new Map();
  const numPkgs = 0;
  const getPkgs = 1;
  const givePkgs = 2;
  
	let canDoIt = true;
  
  //Estructuramos el viaje en un Map
  trip.forEach(el => {
  //Almacenamos la posición como clave, el valor es 0 si deja paquetes
  //Si en la misma posición deja y recoge, el valor es un array
    if (tripMap.has(el[getPkgs])) tripMap.set(el[getPkgs], [el[numPkgs], 0]);
    else tripMap.set(el[getPkgs], el[numPkgs]);
    tripMap.set(el[givePkgs], 0);
  })

  let packages = 0;
  const sortedTripMap = [...tripMap].sort((a, b) => a[0] - b[0]);

  for (const [key, value] of sortedTripMap) {
    if (Array.isArray(value)) {
      packages = value[0]
    } else {
      if (value === 0) packages = 0;
      if (value > 0) packages += value;
    }
    if(packages>capacity){
    	canDoIt=false;
      break;
    }
  }

  return canDoIt;
}
