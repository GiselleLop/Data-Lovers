export const renderItems = (ArrayData) => {
  const ul = document.querySelector('#list_card');
  ArrayData.forEach((item) => {
    const TotalEpisodios = item.episode.reduce(function(contador,episodios){

      if(episodios){
  
        return contador + 1;
      }else{
        return contador;
      }
          
    },0);
  
    //li de la carta
    const li = document.createElement('li');
    li.classList.add('card');
    li.setAttribute("itemscope","");
    li.setAttribute("itemtype", "rick And Morty");
    
  

    //div de la imagen
    const contendItemImg = document.createElement("div");
    contendItemImg.classList.add("data-card");

    const data_img = document.createElement("img");
    data_img.src = item.image;

  
    //dl contenedor del la info
    const infoItem = document.createElement('dl');
   
    //leyenda id
    const data_id = document.createElement('dd');
    data_id.setAttribute("itemprop", "id");
    data_id.classList.add('data_id');
    data_id.textContent = parseInt(item.id);

    //leyenda nombre
    const nameItem = document.createElement('dt');
    nameItem.textContent = "Name";  
    //contenedor del nombre
    const itemName = document.createElement('dd');
    itemName.setAttribute("itemprop", "name");
    itemName.textContent = item.name;

    //leyenda episodios
    const episodeItem = document.createElement('dt');
    episodeItem.textContent = "episodes in which it appears: "+TotalEpisodios;  
    //contenedor del episodios
    
    const buttonInfo = document.createElement('button');
    buttonInfo.classList.add('info');

    buttonInfo.textContent = "More info";
    buttonInfo.addEventListener("click", function () {
      //  console.log(item.id)
      localStorage.setItem("item", JSON.stringify(item))
      //JSON.parse
      window.location.href= "detalle.html"
    })


    infoItem.appendChild(data_id);
    infoItem.appendChild(nameItem);
    infoItem.appendChild(itemName);

    infoItem.appendChild(episodeItem);
    //infoItem.appendChild(itemepisode);
    
    contendItemImg.appendChild(data_img);
    li.appendChild(contendItemImg);
    li.appendChild(infoItem);
    li.appendChild(buttonInfo);


    ul.appendChild(li);
  });
  return ul;  
};


// muestra el detalle de los episodios en el detalle
export  const renderEpisode = (data)=>{

  const listEpisode = document.getElementById('ListEpisode');
  data.episode.forEach(epi => {  
    const li = document.createElement('li');
    li.classList.add('infoEpisode');

    li.textContent = epi;
    listEpisode.appendChild(li);
  });
};

