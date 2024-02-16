window.addEventListener('scroll', function() {
 
  const logo = document.querySelector('.logo');
  const subtitle = document.querySelector('.subtitle');
  const menuOfFilters = document.querySelector('.menuOfFilters');
  const main = this.document.querySelector('main');
  if (window.scrollY > 0) {
    logo.style.padding = '0';
    logo.style.width = '0%'
    main.style.marginTop = '130px'
    subtitle.style.fontSize = '0px'
    menuOfFilters.style.top = '-90px'; 
  } else {
    main.style.marginTop = '250px'
    subtitle.style.fontSize = '20px'
    logo.style.padding = '10px 0';
    logo.style.width = '25%'
    menuOfFilters.style.top = '50px'; 
  }
});


export const renderItems = (ArrayData) => {
  const main = document.querySelector('main');
  ArrayData.forEach((item) => {
    const TotalEpisodios = item.episode.reduce(function(contador,episodios){
      if(episodios){
        return contador + 1;
      }else{
        return contador;
      }
    },0);
  
    const card = document.createElement('article');
    card.classList.add('card');
    card.setAttribute("itemscope","");
    card.setAttribute("itemtype", "rick And Morty");
    
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
    episodeItem.textContent = "episodes in which it appears: "+TotalEpisodios;  
    
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
    main.appendChild(card);
  });
  return main;  
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

