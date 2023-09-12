//import { example } from './dataFunctions.js';
//import { renderItems } from './view.js';


import data from './data/rickandmorty/rickandmorty.js';

/*function extraerData(id) {
  
    let position = id - 1
    let arrayCharacter = data.results;
    return arrayCharacter[position]
     
    appendChild 
}*/


// Obtén una referencia al elemento contenedor
const tarjetasContainer = document.getElementById("root");

const arrPersonajes = data.results
//ELemento Ul para Li
const ulElement = document.createElement('ul');

arrPersonajes.forEach((character) => {
  // Elemento de tarjeta 
  const tarjeta = document.createElement('li');
  tarjeta.classList.add('tarjeta'); // Puedes agregar estilos CSS aquí si lo deseas
 
  //Elemento de imagen
  const imageCharacter = document.createElement('img');
  imageCharacter.className += "photo";
  imageCharacter.src = character.image;
  imageCharacter.alt = `Foto de ${character.name}`;
  // Elemento nombre
  const nameCharacter = document.createElement('p');
  nameCharacter.textContent = `Nombre: ${character.name}`;
  // Elemento especie
  const specieCharacter = document.createElement('p');
  specieCharacter.textContent = `Especie: ${character.species}`;
  //Elemento boton
  const buttonCharacter = document.createElement('button');
  buttonCharacter.textContent = `Ver mas`
  // Se agrega elementos nombre, especie e imagen a la tarjeta
  tarjeta.appendChild(imageCharacter);
  tarjeta.appendChild(nameCharacter);
  tarjeta.appendChild(specieCharacter);
  tarjeta.appendChild(buttonCharacter);

  //Se agrega tarjeta al contenedor Ul
  ulElement.appendChild(tarjeta);

  // Se agrega ul al contenedor principal
  tarjetasContainer.appendChild(ulElement)
});



/*
const nameCharacter = document.querySelector('[itemprop="name"]');
const idCharacter = document.querySelector('[itemprop="id"]')
const statusCharacter = document.querySelector('[itemprop="status"]')
const speciesCharacter = document.querySelector('[itemprop="species"]')
const genderCharacter = document.querySelector('[itemprop="gender"]')
const origenCharacter = document.querySelector('[itemprop="origin"]')
const locationCharacter = document.querySelector('[itemprop="location"]')
*/

//console.log(example, renderItems, data);
