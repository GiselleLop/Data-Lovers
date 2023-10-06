import {sortData, filterAll, filter} from './dataFunctions.js';
import {renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;

filter(arrayData);
renderItems(arrayData);


const orderType = document.querySelector("select[name='sort-order']"); //tipo - asc o desc
const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id

const resetButton = document.querySelector("button[data-testid='button-clear']");


orderType.addEventListener("change",  () => {
  sortData(arrayData, orderType.value, ordenBy.value );
  renderItems(arrayData)
});

ordenBy.addEventListener("change",  () => {
  sortData(arrayData, orderType.value,  ordenBy.value);
  renderItems(arrayData)
});



resetButton.addEventListener('click',() =>{
  document.querySelector('#list_card').innerHTML = '';
  document.querySelector('#status').innerHTML = '';
  document.querySelector('#species').innerHTML = '';
  document.querySelector('#gender').innerHTML = '';
  orderType.innerHTML = '';
  ordenBy.innerHTML = '';
  
  filter(arrayData);

  arrayData.sort((a, b) => { 
  
    return a.id - b.id; 
  
  });

  renderItems(arrayData);

});



//filtro
const filterstatus = document.querySelector('#status');
const filterspecies = document.querySelector('#species');
const filtergender = document.querySelector('#gender');

// Agregar un evento de cambio a todos los filtros que llame a applyFilters
filterstatus.addEventListener("change", () => {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
//  console.log(  filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
});
filterspecies.addEventListener("change", ()=> {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
});
filtergender.addEventListener("change", () => {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value,ordenBy.value)
});


/*
computeStats(arrayData,'Alive');
computeStats(arrayData,'Dead');
computeStats(arrayData,'unknown');
*/

//elementos del modal

const openModal = document.querySelector('.openModl');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

openModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});

