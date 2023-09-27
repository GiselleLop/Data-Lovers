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
 
const tarjetasContainer = document.getElementById("root");
import { renderItems } from './view.js';
export const filterData = (data, filterBy, value) => {
  
  tarjetasContainer.innerHTML="";
  let arrFiltered = data
  arrFiltered = arrFiltered.filter((persona) => persona[filterBy] === value); 
  renderItems(arrFiltered);
}