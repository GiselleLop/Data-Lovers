import { renderItems } from "./view.js";

export const sortData = (data, ordenbyValue ,orderTypeValue) => {
  tarjetasContainer.innerHTML = '';

  if (ordenbyValue === 'id'){
    data.sort((a, b) => {
      if (orderTypeValue === "ASC") {
        return a.id - b.id; 
      }
      else if (orderTypeValue === "DESC") {
        return b.id - a.id; 
      }
    });
  }
  if (ordenbyValue === 'name'){
    data.sort((a, b) => {
      const valorA = a.name.toLowerCase();
      const valorB = b.name.toLowerCase();
      const compare = valorA.localeCompare(valorB); 
      return orderTypeValue === "ASC" ? compare : -compare;
    });
  }
  renderItems(data)
}
/*
function filterAll(arr, status, species, gender) {
    let arrFiltered = arr
  
    if (species !== "All") {
    arrFiltered = arrFiltered.filter((personaje)=> personaje.species===species);
    }
    if (status !== "All") {
      arrFiltered = arrFiltered.filter((personaje)=> personaje.status===status);
    }
    if (gender !== "All") {
      arrFiltered = arrFiltered.filter((personaje)=> personaje.gender===gender);
    }
    crearCards(arrFiltered)
  }  */
 
const tarjetasContainer = document.getElementById("root");

export const filterData = (data, filterBy, value) => {
  if (value === "All"){
    return data
  }
  const arrFiltered = data.filter((persona) => persona[filterBy] === value); 
  return arrFiltered
}

export function filterAll(data, statusValue, speciesValue, genderValue) {
  tarjetasContainer.innerHTML=""
  let arrFiltered = data
  if (speciesValue !== "All") {
    arrFiltered = filterData(arrFiltered,"species",speciesValue)
  }
  if (statusValue !== "All") {
    arrFiltered = filterData(arrFiltered,"status",statusValue)
  }
  if (genderValue !== "All") {
    arrFiltered = filterData(arrFiltered,"gender",genderValue)
  }
 
  /*if (tarjetasContainer.innerHTML="") {
    tarjetasContainer.innerHTML="No se encontro este personaje"
    }
    }*/
  renderItems(arrFiltered)
}
