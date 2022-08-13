/*
En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅:
la carta ✉️ tiene que contener todas las letras del alfabeto.
Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto
que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.
Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales.
Por ejemplo la á y la ä cuenta como una a.
Vamos a ver unos ejemplos de frases:
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
*/

//SOLUCIÓN
export default function pangram(letter) {
  const aCode = 'a'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  //Create alphabet
  const alphabet = Array.from(Array(zCode - aCode + 1).keys()).map((num, idx) => String.fromCharCode(idx + aCode));
  alphabet.push('ñ'); //Add ñ :-)
  //Forma de Normalización de Descomposición Canónica (NFD)
  //Eliminamos los acentos y diéresis \u0301: acento \u0308: diéresis
  //Volvemos a normalizar Forma de Normalización de Composición Canónica (NFC)
  const cleanedLetter = letter.toLowerCase().normalize('NFD').replace(/[\u0301\u0308]/g, "").normalize('NFC');
  
  //Comprobamos que todas las letras del array alphabet están en el texto que hemos tratado
  let result=alphabet.reduce((check,letter)=>check*cleanedLetter.includes(letter),true);
  
  return result===1?true:false;

}
