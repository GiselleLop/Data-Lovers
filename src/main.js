
import {sortData, filterData} from './dataFunctions.js';
import { renderItems,filter } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;
filter.filterInfo(arrayData)

const root = document.querySelector('#root')

// window.onload = ()=> {
//   renderItems(arrayData);
// };
root.appendChild(renderItems(arrayData));

const orderType = document.querySelector("select[name='sort-order']"); //tipo - asc o desc
const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id
const resetButton = document.querySelector("button[data-testid='button-clear']");


orderType.addEventListener("change",  () => {
  sortData(arrayData,ordenBy.value ,orderType.value);
});
ordenBy.addEventListener("change",  () => {
  sortData(arrayData,ordenBy.value ,orderType.value); 
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


//////elementos del modal

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
