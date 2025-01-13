export const renderDetail = (character) => {
  console.log(character);
  
  const main = document.querySelector("main");
  const filter = document.querySelector(".menuOfFilters");
  filter.style.display = "none";

  const detailContent = ` 
  <div class='detailContainer'>
  <button class='backToMenu'>Back</button>

  <div class="containerOfDetail"> 

    <div class="informationCharacter">
     <h1 class='nameOfCharacter'> ${character.name} </h1>
     <img class="imageOfDetail" width="100%" src='${character.image}'>
    </div>
  
  <div class="episodesOfCharacter">
    <h1 class='episodes_title'>Characteristics</h1>
    <ul class="textDetail" style="list-style: none;">
      <li>Id: ${character.id}</li>
      <li>Episodes: ${character.episode.length}</li>
      <li>Status: ${character.status}</li>
      <li>Specie: ${character.species}</li>
      <li> Gender: ${character.gender}</li>
      <li>Origin: ${character.origin.name}</li>
      <li>Location: ${character.location.name}</li>
    </ul>
  </div>
  </div>
</div>
`;
  
main.innerHTML = detailContent;
const buttonBack = document.querySelector(".backToMenu");
buttonBack.addEventListener("click", () => {
  window.location.href = "index.html";
});

// const listEpisode = document.querySelector(".ListEpisode");
// character.episode.forEach((episode) => {
//   const li = document.createElement("li");
//   li.classList.add("infoEpisode");

//   li.textContent = episode;
//   listEpisode.appendChild(li);
// })
}