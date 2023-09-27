
export const renderItems = (ArrayData) => {
  
  const Datalist = document.getElementById('root');
  ArrayData.forEach((item) => {

    //li de la carta
    const li = document.createElement('li');
    li.classList.add('card');
  
    //div de la imagen
    const contendItemImg = document.createElement('div');
    contendItemImg.classList.add('data-card'); 
  
    const data_img = document.createElement('img');
    data_img.src = item.image;
  
    //label de la numeracion
    const data_id = document.createElement('label');
    data_id.classList.add('data_id');
    data_id.textContent = item.id;
  
    //dl contenedor del la info
    const infoItem = document.createElement('dl');
  
    //leyenda nombre
    const nameItem = document.createElement('dt');
    nameItem.textContent = "Nombre";
  
    //contenedor del nombre
    const itemName = document.createElement('dd');
    itemName.textContent = item.name;
    
    const buttonInfo = document.createElement('button');
    buttonInfo.classList.add('info');
    buttonInfo.textContent = "More info";
    buttonInfo.addEventListener("click", function() {
      //  console.log(item.id)
      localStorage.setItem("item", JSON.stringify(item))
      //JSON.parse
      window.location.href= "detalle.html"})

    infoItem.appendChild(nameItem);
    infoItem.appendChild(itemName);
    contendItemImg.appendChild(data_img);
    li.appendChild(data_id);
    li.appendChild(contendItemImg);
    li.appendChild(infoItem);
    li.appendChild(buttonInfo);
    Datalist.appendChild(li);
  });
};


// Agrega las opciones de los filtros de genero, status, species
const filterInfo = (ArrayData) => {
 
  function listDataFilter (arraydt){
    
    const nombresUnicos = new Set();
    const uniqueSpecies = new Set();
    const uniqueGender = new Set();
    for (const item of arraydt) {
      nombresUnicos.add(item.status);
      uniqueSpecies.add(item.species);
      uniqueGender.add(item.gender);
    }
    const nameunique = Array.from(nombresUnicos)
    const specieunique = Array.from(uniqueSpecies)
    const genderunique = Array.from(uniqueGender)   
    return [nameunique,specieunique,genderunique]
  
  }

  const filtesList = listDataFilter(ArrayData);
  
  const select = document.getElementById("status");
  filtesList[0].forEach((element) => {
    const newOpcion = document.createElement("option");
    newOpcion.value = element;
    newOpcion.text = element;

    select.appendChild(newOpcion);
    
  });
  const selectSpecies = document.getElementById("species");
  filtesList[1].forEach(element => {
    const newOpcion = document.createElement("option");
    newOpcion.value = element;
    newOpcion.text = element;

    selectSpecies.appendChild(newOpcion);
  });
  const selectGender = document.getElementById("gender");
  filtesList[2].forEach(element => {
    const newOpcion = document.createElement("option");
    newOpcion.value = element;
    newOpcion.text = element;

    selectGender.appendChild(newOpcion);
  });

};

export const filter = {filterInfo};


// muestra el detalle de los episodios en el detalle
export  const renderEpisode = (data)=>{
  const listEpisode = document.getElementById('ListEpisode');
  data.episode.forEach(epi => {

    const li = document.createElement('li');
    li.classList.add('infoEpisode');
    li.textContent = epi;
    listEpisode.appendChild(li);
  });
}


