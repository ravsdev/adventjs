/*
Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama,
ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día.
Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo.
Lo malo es que los datos están almacenados de una forma un poco rara en un array:

    El array contiene otros arrays que contienen los datos de cada transportista
    transportista[0] -> Nombre/ID del Transportista
    transportista[1] -> Paquetes que gestiona en un día
    transportista[2] -> Array con sus subordinados


Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado:

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

¡Ten cuidado! Como has visto en el segundo ejemplo, el organigrama puede tener diferentes niveles
y además nos viene información que puede ser que no necesitemos. Debemos tener en cuenta el parámetro de
carrierID para calcular bien el número y contar todo su equipo
*/

//SOLUCIÓN
export default function countPackages(carriers, carrierID) {
  const id = 0,
    pkgs = 1,
    team = 2;
    
  let idList = [carrierID];

  let carrierList = carriers.filter(carrier => {
    //Comprobamos si la id del carrier está en la lista
    if (idList.includes(carrier[id])) {
      //Si el carrier tiene un equipo a su cargo, añadimos las ids de los carriers a la lista
      if (carrier[team].length) idList.push(...carrier[team])
      return true
    }
  })
  
  //Contamos los paquetes de todos los carriers que hay en la lista
  let amount = carrierList.reduce((acc, cur) => {
    return acc + cur[1]
  }, 0)

  return amount
}
