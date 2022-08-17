/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas
y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello,
podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter
a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar
otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
 la transformación sería así:
B -> L
A -> I
L -> B


const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)


const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
 no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud


*/

//SOLUCIÓN
function canReconfigure(from, to) {
  let transforms = new Map();
  let result = true;
  const fromChars = from.split("");
  const toChars = to.split("");

  //Si la longitud es diferente no hace falta que hagamos nada más
  if (from.length !== to.length) return false

  //Recorremos los carácteres que se van a sustituir
  for (const [idx, char] of fromChars.entries()) {
    const hasChar = transforms.has(char);
    const getChar = transforms.get(char);
    const values = [...transforms.values()];
    const convertTo = toChars[idx];
    
    //Si ya hemos cambiado (from) una letra o hemos asignado esa letra (to)
    //Y la letra no es la misma a cambiar (from === to) devolvemos FALSE
    if ((hasChar || values.includes(convertTo)) &&
      getChar !== convertTo) {
      return false;
    }

    transforms.set(char, toChars[idx])
  }

  return true;
}
