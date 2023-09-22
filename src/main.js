
import {sortData} from './dataFunctions.js';

import { filter } from './view.js';

import { renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './dataFunctions.js';

const arrayData = data.results;

window.onload = ()=> {
  renderItems(arrayData);
};

const orderType = document.querySelector("select[name='type']"); //tipo - asc o desc
const ordenby = document.querySelector("select[name='By']"); // por nombre o por id
const ResetBotton = document.querySelector("button[data-testid='button-clear']");
const rootData = document.querySelector("#root");

orderType.addEventListener("change", function () {
  rootData.innerHTML = '';
  renderItems(sortData(arrayData,ordenby.value ,orderType.value));

});

ordenby.addEventListener("change", function () {
  
  rootData.innerHTML = '';
  renderItems(sortData(arrayData,ordenby.value ,orderType.value));

});

ResetBotton.addEventListener('click',() =>{window.location.reload()});





//filtro
const filterstatus = document.querySelector('#status');
const filterspecies = document.querySelector('#species');
const filtergender = document.querySelector('#gender');

filterstatus.addEventListener("change", ()=> {
  filterData(arrayData, filterstatus.id, filterstatus.value)
});

filterspecies.addEventListener("change", ()=> {  
  filterData(arrayData, filterspecies.id, filterspecies.value)
})

filtergender.addEventListener("change" , ()=> {

  filterData(arrayData, filtergender.id, filtergender.value)
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

