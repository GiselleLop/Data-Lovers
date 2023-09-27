
import {sortData, filterData} from './dataFunctions.js';
import { renderItems,filter } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;
filter.filterInfo(arrayData)

window.onload = ()=> {
  renderItems(arrayData);
};
 

const orderType = document.querySelector("select[name='order']"); //tipo - asc o desc
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
  if (filterspecies.selected = true){
    filterstatus.value === "All"
  }
})

filtergender.addEventListener("change" , ()=> {

  filterData(arrayData, filtergender.id, filtergender.value)
})
