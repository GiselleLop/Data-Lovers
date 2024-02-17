
export const renderItems = (ArrayData) => {
  
  const containerOfCards = document.createElement('div');
  containerOfCards.classList.add('containerOfCards');
  
  ArrayData.forEach((item) => {
    const episodesTotal = item.episode.reduce(function(contador,episodios){
      if(episodios){
        return contador + 1;
      }else{
        return contador;
      }
    },0);
  
    const card = document.createElement('article');
    card.classList.add('card');
    
    const contendItemImg = document.createElement("div");
    contendItemImg.classList.add("data-card");

    const data_img = document.createElement("img");
    data_img.src = item.image;

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute("class", "infoContainer");
   
    const data_id = document.createElement('p');
    data_id.classList.add('idCharacter');
    data_id.textContent = parseInt(item.id);

    const nameItem = document.createElement('h2');
    nameItem.setAttribute("class", "nameAndEpisodeCharacterText");
    nameItem.textContent = "Name";  
  
    const itemName = document.createElement('h1');
    itemName.setAttribute("class", "nameCharacter");
    itemName.textContent = item.name;

    const episodeItem = document.createElement('h2');
    episodeItem.setAttribute("class", "nameAndEpisodeCharacterText");
    episodeItem.textContent = "episodes in which it appears: "+ episodesTotal;  
    
    const buttonInfo = document.createElement('button');
    buttonInfo.classList.add('info');

    buttonInfo.textContent = "More info";
    buttonInfo.addEventListener("click", function () {
      localStorage.setItem("item", JSON.stringify(item))
      window.location.href= "detalle.html"
    })


    infoContainer.appendChild(nameItem);
    infoContainer.appendChild(itemName);
    infoContainer.appendChild(episodeItem);
    contendItemImg.appendChild(data_img);
    contendItemImg.appendChild(data_id);
    card.appendChild(contendItemImg);
    card.appendChild(infoContainer);
    card.appendChild(buttonInfo);
    containerOfCards.appendChild(card);
  
  });
  return containerOfCards; 
};


export const renderEpisode = (data)=>{
  const listEpisode = document.getElementById('ListEpisode');
  data.episode.forEach(epi => {  
    const li = document.createElement('li');
    li.classList.add('infoEpisode');

    li.textContent = epi;
    listEpisode.appendChild(li);
  });
};

