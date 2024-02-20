import {filterAll, renderFilters ,computeStats} from './dataFunctions.js';
import { renderItems } from './render-cards.js';
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
const Allselects = document.querySelectorAll('select')
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
  if (window.innerWidth < 768) {
    if (window.scrollY > 0) {
      containerOfCards.style.marginTop = '180px'
      menuOfFilters.style.top = '-5%';
    } 
    else {
      containerOfCards.style.marginTop = '250px'
      menuOfFilters.style.top = '50px';
    }
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1025) {
    if (window.scrollY > 0) {
      containerOfCards.style.marginTop = '130px'
      menuOfFilters.style.top = '-5%';
      logo.style.padding = '0';
      logo.style.width = '0%'
    } 
    else {
      containerOfCards.style.marginTop = '230px'
      menuOfFilters.style.top = '50px';
      logo.style.padding = '10px 0';
      logo.style.width = '25%'
    }
  }
  else {
  
    if (window.scrollY > 0) {
      logo.style.padding = '0';
      logo.style.width = '0%'
      containerOfCards.style.marginTop = '130px'
      subtitle.style.fontSize = '0px'
      menuOfFilters.style.top = '-15%';
    } else {
      containerOfCards.style.marginTop = '230px'
      subtitle.style.fontSize = '20px'
      logo.style.padding = '10px 0';
      logo.style.width = '25%'
      menuOfFilters.style.top = '50px';
    }
  }

});

Allselects.forEach(select => {
  select.addEventListener("change", () => {
    dataFiltered = filterAll(arrayData, selectStatus.value, selectSpecies.value, selectGender.value, orderType.value, ordenBy.value)
    dataRendered = renderItems(dataFiltered)
    main.textContent = ''
    main.append(dataRendered)
  });
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

stadisticButton.addEventListener('click', ()=>{
  const modalStadisctics = createModal()
  main.append(modalStadisctics)
  computeStats(arrayData);
});


