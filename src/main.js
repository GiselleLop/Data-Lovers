import { filter } from './view.js';
import { renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './dataFunctions.js';

const arrPersonajes = data.results
filter.filterInfo(arrPersonajes)

window.onload = ()=> {
  renderItems(arrPersonajes)
};

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