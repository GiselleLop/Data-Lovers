
import {sortData, filterData, filter} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;
filter(arrayData);
renderItems(arrayData);

const orderType = document.querySelector("select[name='sort-order']"); //tipo - asc o desc
//const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id
const resetButton = document.querySelector("button[data-testid='button-clear']");


orderType.addEventListener("change",  () => {
  sortData(arrayData,orderType.value);
});

/*ordenBy.addEventListener("change",  () => {
  sortData(arrayData,ordenBy.value ,orderType.value); 
});
*/
resetButton.addEventListener('click',() =>{
  document.querySelector('#list_card').innerHTML = '';
  document.querySelector('#status').innerHTML = '';
  document.querySelector('#species').innerHTML = '';
  document.querySelector('#gender').innerHTML = '';
  orderType.innerHTML = '';
  
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

//filterstatus.innerHtml = '';


filterstatus.addEventListener("change", ()=> {
  filterData(arrayData, filterstatus.id, filterstatus.value)
});

filterspecies.addEventListener("change", ()=> {  
  filterData(arrayData, filterspecies.id, filterspecies.value)
})

filtergender.addEventListener("change" , ()=> {

  filterData(arrayData, filtergender.id, filtergender.value)
})

//datos estatisticos
/*
computeStats(arrayData,'Alive');
computeStats(arrayData,'Dead');
computeStats(arrayData,'unknown');
*/
//computeStats(arrayData);


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


