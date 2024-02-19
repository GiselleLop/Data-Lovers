import {filterAll, renderFilters ,computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import { createModal } from './stadisticModal.js';
import data from './data/rickandmorty/rickandmorty.js';
const main = document.querySelector('main');
let arrayData;
let listOfFilterStatus;
const selectStatus = document.getElementById("status");
const selectSpecies = document.getElementById("species");
const selectGender = document.getElementById("gender");
const orderType = document.querySelector("select[name='sort-order']"); //tipo - asc o desc
const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id
const clearButton = document.querySelector(".button-clear");
const stadisticButton = document.querySelector('.stadistics');
let dataFiltered ;
let dataRendered;

window.onload = function() {
  arrayData = data.results;
  listOfFilterStatus = renderFilters(arrayData)

  listOfFilterStatus[0].forEach((status) => {
    const newOpcion = document.createElement("option");
    newOpcion.id = status;
    newOpcion.text = status;
    selectStatus.appendChild(newOpcion);
  })

  listOfFilterStatus[1].forEach((status) => {
    const newOpcion = document.createElement("option");
    newOpcion.id = status;
    newOpcion.text = status;

    selectSpecies.appendChild(newOpcion);
  });

  listOfFilterStatus[2].forEach((gender) => {
    const newOpcion = document.createElement("option");
    newOpcion.id = gender;
    newOpcion.text = gender;
    selectGender.appendChild(newOpcion);
  });

  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.append(dataRendered)
};


window.addEventListener('scroll', function() {
  const containerOfCards = this.document.querySelector('.containerOfCards')
  const logo = document.querySelector('.logo');
  const subtitle = document.querySelector('.subtitle');
  const menuOfFilters = document.querySelector('.menuOfFilters');
  if (window.scrollY > 0) {
    logo.style.padding = '0';
    logo.style.width = '0%'
    containerOfCards.style.marginTop = '130px'
    subtitle.style.fontSize = '0px'
    menuOfFilters.style.top = '-90px';
  } else {
    containerOfCards.style.marginTop = '230px'
    subtitle.style.fontSize = '20px'
    logo.style.padding = '10px 0';
    logo.style.width = '25%'
    menuOfFilters.style.top = '50px';
  }
});

selectStatus.addEventListener("change", () => {
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)
});
selectSpecies.addEventListener("change", ()=> {
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)

});
selectGender.addEventListener("change", () => {
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)
});
orderType.addEventListener("change",  () => {
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)
});
ordenBy.addEventListener("change",  () => {
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)
});

clearButton.addEventListener('click',() =>{
  selectStatus.value = 'All'
  selectGender.value = "All"
  selectSpecies.value = "All"
  orderType.value = "ASC"
  ordenBy.value = "Id"
  dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
  dataRendered = renderItems(dataFiltered)
  main.textContent = ''
  main.append(dataRendered)
});


//elementos del modal


// const modal = document.querySelector('.modal');
// const closeModal = document.querySelector('.modal_close');

stadisticButton.addEventListener('click', ()=>{
  const modalStadisctics = createModal()
  main.append(modalStadisctics)
  computeStats(arrayData);
  // const buttonCloseModal = document.querySelector('.modal_close')
  // buttonCloseModal.addEventListener('click', ()=>{
  
    

  // })
});

// closeModal.addEventListener('click', (e)=>{
//   e.preventDefault();
//   modal.classList.remove('modal--show');
// });

//MENU RESPONSIVE

// const openMenu = document.querySelector('#buttomMenuResponsive');
// const menu = document.querySelector('.menuResponsive');
// const closeMenu = document.querySelector('#buttomCloseMenuResponsive');
// const sectionBody = document.querySelector('#root');


// openMenu.addEventListener('click', (e)=>{
//   e.preventDefault();
//   closeMenu.classList.add('buttomCloseMenuResponsiveActive');
//   sectionBody.classList.add('sectionOpenMenu');
//   openMenu.setAttribute("style", "display:none");
//   closeMenu.setAttribute("style", "display:block");
//   menu.classList.remove('menuResponsiveDisabled');

// });

// closeMenu.addEventListener('click', (e)=>{
//   e.preventDefault();
//   menu.classList.add('menuResponsiveDisabled');
//   sectionBody.classList.remove('sectionOpenMenu');
//   openMenu.removeAttribute("style", "display:none");
//   closeMenu.removeAttribute("style", "display:block");

// });


//boton ir arriba
// 


//const btnReturnMenu = document.getElementById('return');
// btnReturnMenu.addEventListener('click',()=>{
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Desplazamiento suave
//   });
// })