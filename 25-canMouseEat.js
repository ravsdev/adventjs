/*
Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo.
Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

    Un espacio vacío es que no hay nada
    Una m es el ratón
    Un * es la comida

Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

*/

//SOLUCIÓN
export default function canMouseEat(direction, game) {
  const mouse = "m";
  const food = "*";
  let mousePos = null;
  let nextPos = [];
  let nextX;
  let nextY;

  //Obtenemos la posición del ratón
  for (const [idx, pos] of game.entries()) {
    const isMousePos = pos.findIndex(pos => pos === "m");
    if (isMousePos !== -1) {
      mousePos = [idx, isMousePos]
      break;
    }
  }

  //Si no hay midurat devolvemos null
  if (mousePos === null) {
    console.log("No hay midurat");
    return null;
  }

  //Obtenemos la posición a la que nos vamos a desplazar
  switch (direction) {
    case "up":
      nextPos = [-1, 0];
      break;
    case "down":
      nextPos = [1, 0];
      break;
    case "left":
      nextPos = [0, -1];
      break;
    case "right":
      nextPos = [0, 1];
      break;
    default:
      console.log("Movimiento incorrecto")
  }

  nextY = mousePos.at(0) + nextPos.at(0);
  nextX = mousePos.at(1) + nextPos.at(1);

  const posExists = game[nextY] !== undefined && game[nextY][nextX] !== undefined;

  return posExists && game[nextY][nextX] === food
}
