
import {sortData} from './dataFunctions.js';

import { filter } from './view.js';

import { renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './dataFunctions.js';

const arrayData = data.results;
window.onload = ()=> {
  renderItems(arrayData);
};
filter.filterInfo(arrayData)

const tarjetasContainer = document.getElementById("root");


const orderType = document.querySelector("select[name='type']"); //tipo - asc o desc
const ordenby = document.querySelector("select[name='By']"); // por nombre o por id
const resetButton = document.querySelector("button[data-testid='button-clear']");


orderType.addEventListener("change", function () {
  tarjetasContainer.innerHTML=""; 
  renderItems(sortData(arrayData,ordenby.value ,orderType.value));

});

ordenby.addEventListener("change", function () {
  
  tarjetasContainer.innerHTML="";
  renderItems(sortData(arrayData,ordenby.value ,orderType.value));

});

resetButton.addEventListener('click',() =>{window.location.reload()});

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



