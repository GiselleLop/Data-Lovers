
//function sortData(data, sortBy, sortOrder) {
// function computeStats(data){}
import { renderItems } from './view.js';
export const filterData = (data, filterBy, value) => {
  const tarjetasContainer = document.getElementById("root");
  tarjetasContainer.innerHTML=""
  let arrFiltered = data
    arrFiltered = arrFiltered.filter((persona) => persona[filterBy] === value); 

  renderItems(arrFiltered)
}
