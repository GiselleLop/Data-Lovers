import {sortData} from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const ArrayData = data.results;


const orderType = document.querySelector("select[name='type']"); //tipo - asc o desc
const ordenby = document.querySelector("select[name='By']"); // por nombre o por id
const ResetBotton = document.querySelector("button[data-testid='button-clear']");
const rootData = document.querySelector("#root");

orderType.addEventListener("change", function () {
  rootData.innerHTML = '';
  renderItems(sortData(ArrayData,ordenby.value ,orderType.value));

});

ordenby.addEventListener("change", function () {
  
  rootData.innerHTML = '';
  renderItems(sortData(ArrayData,ordenby.value ,orderType.value));

});

ResetBotton.addEventListener('click',() =>{window.location.reload()});

renderItems(ArrayData);

