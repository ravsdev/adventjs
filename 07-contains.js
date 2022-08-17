/*
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.
*/

//SOLUCIÓN
function contains(store, product) {
  //Función recursiva
  function getProducts(store,product){
    let resultado=Object.values(store).map(value=>{
      if(typeof value === 'object'){
        return getProducts(value,product)
      }else{
        return value
      }
    });
    return resultado.flat();
  }
  
  return getProducts(store,product).includes(product);
}

//SOLUCIÓN 2
export default function contains(store, product) {
  let resultado = false;
  for (const thing in store) {
    if (typeof store[thing] === "object") {
      resultado = contains(store[thing], product)
    } else if (store[thing] === product) {
      resultado = true
    }
  }

  return resultado
}
