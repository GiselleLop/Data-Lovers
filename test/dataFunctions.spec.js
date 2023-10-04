import { example, anotherExample } from '../src/dataFunctions.js';
//import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});export const renderItems = (ArrayData) => {

  const Datalist = document.getElementById('root');
  ArrayData.forEach((item) => {

    //li de la carta
    const li = document.createElement('li');
    li.classList.add('card');
    li.setAttribute("item", "helloButton");

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
    nameItem.textContent = "Name";

    //contenedor del nombre
    const itemName = document.createElement('dd');
    itemName.textContent = item.name;

    const buttonInfo = document.createElement('button');
    buttonInfo.classList.add('info');
    buttonInfo.textContent = "More info";
    buttonInfo.addEventListener("click", function () {
      //  console.log(item.id)
      localStorage.setItem("item", JSON.stringify(item));
      //JSON.parse
      window.location.href = "detalle.html";
    });

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

