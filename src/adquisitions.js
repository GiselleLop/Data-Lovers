
import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './dataFunctions.js';
const dataOrigin = data.results;
//console.log(dataOrigin)


const grafica = document.querySelector("#grafica");
const arrayFemale = filterData(dataOrigin,"gender","Female").length
const arrayMale = filterData(dataOrigin,"gender","Male").length
const arrayUnknown = filterData(dataOrigin,"gender","unknown").length

/*
function filtergenders() {
const ArrayFemale = ""
if (genders === "Female") {
  ArrayFemale === genders 
}
return ArrayFemale
}*/
const button = document.getElementById('resultado');
button.addEventListener('click' , cargarGender)
function cargarGender() {
  return dataOrigin
}
// eslint-disable-next-line no-undef
new Chart(grafica,{
  type: 'doughnut',
  data: {
    labels:["Female","Male","Unknown"], 
    datasets: [{
      data:[arrayFemale,arrayMale,arrayUnknown],
      backgroundColor:[
        'rgb(252, 252, 0)',
        'rgb(69,25,255)',
        'rgb(7, 225, 10)',
      ]
    }]
  }
})