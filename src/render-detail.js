const main = document.querySelector("main");
const header = document.querySelector("header");
const characterLocal = JSON.parse(localStorage.getItem("item"));

const detailContent = ` 
<button class='backToMenu'>Back to principal page</button>
<div class="containerOfDetail"> 

<div class="informationCharacter">
<h1 class='nameOfCharacter'> ${characterLocal.name} </h1>
  <img class="imageOfDetail" width="100%" src='${characterLocal.image}'>
  
  </div>
  
  <div class="episodesOfCharacter">
   
    <h1 class='nameOfCharacter'> Character data </h1>
    <ul class="textDetail" style="list-style: none;">
  <li  class="idDeatil">Id: ${characterLocal.id}</li>
  <li class="episode">Episodes: ${characterLocal.episode.length}</li>
  <li class="status">Status: ${characterLocal.status}</li>
  <li class="species">Specie: ${characterLocal.species}</li>
  <li class="gender"> Gender: ${characterLocal.gender}</li>
  <li class="origin">Origin: ${characterLocal.origin.name}</li>
  <li class="location">Location: ${characterLocal.location.name}</li>
 </ul>
  </div>
</div>
`;
  
main.innerHTML = detailContent;
header.style.position = "static";


const buttonBack = document.querySelector(".backToMenu");
buttonBack.addEventListener("click", () => {
  window.location.href = "index.html";
});

const listEpisode = document.querySelector(".ListEpisode");
characterLocal.episode.forEach((episode) => {
  const li = document.createElement("li");
  li.classList.add("infoEpisode");

  li.textContent = episode;
  listEpisode.appendChild(li);

});
