import {filterAll, filter,computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;

filter(arrayData);
renderItems(arrayData);

computeStats(arrayData);

const orderType = document.querySelector("select[name='sort-order']"); //tipo - asc o desc
const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id

const resetButton = document.querySelector("button[data-testid='button-clear']");
const tarjetasContainer = document.querySelector("#list_card");

orderType.addEventListener("change",  () => {
  tarjetasContainer.innerHTML = "";
  //sortData(arrayData, orderType.value, ordenBy.value );
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
  //renderItems(arrayData)
});

ordenBy.addEventListener("change",  () => {
  tarjetasContainer.innerHTML = "";
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
  //sortData(arrayData, orderType.value,  ordenBy.value);
  //renderItems(arrayData)
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
});
filterspecies.addEventListener("change", ()=> {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value, ordenBy.value)
});
filtergender.addEventListener("change", () => {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value, orderType.value,ordenBy.value)
});


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

//MENU RESPONSIVE

const openMenu = document.querySelector('#buttomMenuResponsive');
const menu = document.querySelector('.menuResponsive');
const closeMenu = document.querySelector('#buttomCloseMenuResponsive');
const sectionBody = document.querySelector('#root');
 

openMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  closeMenu.classList.add('buttomCloseMenuResponsiveActive');
  sectionBody.classList.add('sectionOpenMenu');
  openMenu.setAttribute("style", "display:none");
  closeMenu.setAttribute("style", "display:block");
  menu.classList.remove('menuResponsiveDisabled');

});

closeMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  menu.classList.add('menuResponsiveDisabled');
  sectionBody.classList.remove('sectionOpenMenu');
  openMenu.removeAttribute("style", "display:none");
  closeMenu.removeAttribute("style", "display:block");

});


//boton ir arriba
const btnReturnMenu = document.getElementById('return');
btnReturnMenu.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
})


