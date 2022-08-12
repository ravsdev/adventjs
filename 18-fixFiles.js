/*
Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan
guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo
número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido.

Lo mejor es que veamos un ejemplo:

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

Por cierto, nos han dicho que son Agile y usan Scrum. Por eso quieren saber cuánto tiempo vas a tardar para saber
cuándo van a poder usarlo. Que hay prisa. 😝 Así que entra a Discord y cuéntanos.

*/

//SOLUCIÓN
export default function fixFiles(files) {
  let fileMap = new Map();

  return files.map((file) => {
   //Si ya hay un fichero con el mismo nombre, sumamos uno al valor de ese archivo
    if (fileMap.has(file)) {
      fileMap.set(file, fileMap.get(file) + 1)
      return `${file}(${fileMap.get(file)})`
    } else {
     //Si no hay ningún fichero con ese nombre lo añadimos a la lista de archivos
      fileMap.set(file, 0);
      return file;
    }
  })
}
