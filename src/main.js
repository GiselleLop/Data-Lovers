import {filter} from './dataFunctions.js';
//import { renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';




const arrPersonajes = data.results
filter.filterInfo(arrPersonajes)

window.onload = ()=> {
  crearCards(arrPersonajes)

};

//  elemento contenedor de tarjetas
const tarjetasContainer = document.getElementById("root");

//filtro
const filterstatus = document.querySelector('#status');
const filterspecies = document.querySelector('#species');
const filtergender = document.querySelector('#gender');




filterstatus.addEventListener("change", ()=> {
  filterData(arrPersonajes, filterstatus.id, filterstatus.value)
});

filterspecies.addEventListener("change", ()=> {
  filterData(arrPersonajes, filterspecies.id, filterspecies.value)
})

filtergender.addEventListener("change" , ()=> {
  filterData(arrPersonajes, filtergender.id, filtergender.value)
})



function filterData(data, filterBy, value) {
  //remove()
  let arrFiltered = data
   
  if (filterBy==="status") { 

    arrFiltered = arrFiltered.filter((persona) => persona.status === value); 
  }
  if ( filterBy === "species") { 
    arrFiltered = arrFiltered.filter((persona) => persona.species === value);
  }
  if (filterBy === "gender") { 
    arrFiltered = arrFiltered.filter((persona) => persona.gender === value);
  }

  crearCards(arrFiltered)
}
/*
function filter(arr, status, species, gender) {
  remove()

  let arrFiltered = arr

  if (species !== "All") {
    arrFiltered = arrFiltered.filter((personaje)=> personaje.species===species);
  }
  if (status !== "All") {
    arrFiltered = arrFiltered.filter((personaje)=> personaje.status===status);
  }
  if (gender !== "All") {
    arrFiltered = arrFiltered.filter((personaje)=> personaje.gender===gender);
  }
  crearCards(arrFiltered)
}
*/

//Funcion remover hijos
function remove() {

  const ulTarget = document.querySelector(".ulTarget");
  
  while (ulTarget.hasChildNodes()) {
    ulTarget.removeChild(ulTarget.firstChild);
  }
}





//ELemento Ul para Li
const ulElement = document.createElement('ul');
ulElement.className += "ulTarget";


function crearCards(arr) {

  arr.forEach((character) => {

    // Elemento de tarjeta 
    const tarjeta = document.createElement('li');
    tarjeta.classList.add('card'); // Puedes agregar estilos CSS aquí si lo deseas
    tarjeta.setAttribute("itemtype", "cardLi")
 
    //Elemento de imagen
    const imageCharacter = document.createElement('img');
    imageCharacter.className += "photo";
    imageCharacter.setAttribute("itemprop", "image")
    imageCharacter.src = character.image;
    imageCharacter.alt = `Foto de ${character.name}`;
    // Elemento nombre
    const nameCharacter = document.createElement('p');
    nameCharacter.textContent = `Nombre: ${character.name}`;
    nameCharacter.setAttribute("itemprop", "name")
    // Elemento especie
    const specieCharacter = document.createElement('p');
    specieCharacter.setAttribute("itemprop", "species")

    specieCharacter.textContent = `Especie: ${character.species}`;
  
    //Elemento boton
    const buttonCharacter = document.createElement('button');
    buttonCharacter.textContent = `Ver mas`
    buttonCharacter.addEventListener("click", function() {
    //  console.log(character.id)
      localStorage.setItem("character", JSON.stringify(character))
      //JSON.parse
      window.location.href= "detalle.html"
    } )
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
}

// DETALLE





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