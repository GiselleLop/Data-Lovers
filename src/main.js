import {sortData} from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const ArrayData = data.results;

const ordenarSelect = document.querySelector("select[name='type']");
const ResetBotton = document.querySelector("button[data-testid='button-clear']");

ordenarSelect.addEventListener("change", function () {
  const sortOrder = ordenarSelect.value;
  ordenarLista(sortOrder);
});

function ordenarLista(sortOrder) {
  sortData(sortOrder);
}

ResetBotton.addEventListener('click',() =>{
  window.location.reload(true);
});

renderItems(ArrayData);

