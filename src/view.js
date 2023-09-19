// estas funciones son de ejemplo

export const renderItems = (ArrayData) => {
  
  const Datalist = document.getElementById('root');
  ArrayData.forEach(function(item) {

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

