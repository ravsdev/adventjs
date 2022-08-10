/*
  Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100

Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto.
¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN

*/

//SOLUCIÓN usando objeto como estructura y reduce
export default function decodeNumber(symbols) {
  //Si hay algún símbolo que no sea los del cheatsheet devolvemos NaN
  if (/[^.,:;!]/.test(symbols)) return NaN
	const cheatsheet = {
  	'.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  };
 	let decoded=symbols.split('').reduce((acc,cur,idx,arr)=>{
  	let value = cheatsheet[cur];
    //Si el siguiente valor es mayor el valor actual se resta
    if(value<cheatsheet[arr[idx+1]]) value*=-1;
    return acc+value
  },0);
  
  return decoded
}

//SOLUCIÓN usando un Map como estructura
function decodeNumber(symbols) {
  const cheatsheet = new Map();
  cheatsheet.set('.',1);
  cheatsheet.set(',',5);
  cheatsheet.set(':',10);
  cheatsheet.set(';',50);
  cheatsheet.set('!',100);
  
 	let decoded=symbols.split('').reduce((acc,cur,idx,arr)=>{
  	let value = cheatsheet.get(cur);
    if(value<cheatsheet.get(arr[idx+1])) value*=-1;
    return acc+value
  },0);
  return /[^.,:;!]/.test(symbols)?NaN:decoded
}
