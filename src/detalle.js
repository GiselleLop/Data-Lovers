
import { renderEpisode } from './view.js';

const data = JSON.parse(localStorage.getItem("item"))
renderEpisode(data);

window.onload = ()=> {
  detailItem(data)
};
//creacion del detalle
function detailItem (item) {
  const nameList = document.querySelector('h1[itemprop="name"]');
  const imageList = document.querySelector('img[itemprop="image"]');
  const idList = document.querySelector('span[itemprop="id"]');
  const episodeList = document.querySelector('span[itemprop="episode"]');
  const statusList = document.querySelector('span[itemprop="status"]');
  const speciesList = document.querySelector('span[itemprop="species"]');
  const genderList = document.querySelector('span[itemprop="gender"]');
  const originList = document.querySelector('span[itemprop="origin"]');
  const locationList = document.querySelector('span[itemprop="location"]');
    
  nameList.textContent = item.name
  imageList.src = item.image
  idList.textContent = " " + item.id;
  episodeList.textContent = " " + item.episode.length;
  statusList.textContent = " " + item.status;
  speciesList.textContent = " " + item.species;
  genderList.textContent = " " + item.gender;
  originList.textContent = " " + item.origin.name;
  locationList.textContent = " " + item.location.name;
}
    
