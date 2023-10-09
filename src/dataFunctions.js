import { renderItems } from "./view.js";

export const sortData = (data, orderTypeValue, ordenbyValue) => {
  
  if (ordenbyValue === "id") {
    data.sort((a, b) => {
      if (orderTypeValue === "asc") {
        return a.id - b.id;
      } else if (orderTypeValue === "desc") {
        return b.id - a.id;
      }
    });
  }
  if (ordenbyValue === "name") {
    data.sort((a, b) => {
      const valorA = a.name.toLowerCase();
      const valorB = b.name.toLowerCase();
      const compare = valorA.localeCompare(valorB);
      return orderTypeValue === "asc" ? compare : -compare;
    });
  }
  data.sort((a, b) => {
    if (ordenbyValue === "") {
      return a.id - b.id;
    }
  });
  return data;
};

const tarjetasContainer = document.querySelector("#list_card");

export const filterData = (data, filterBy, value) => {
  if (value === "All") {
    return data;
  }
  const arrFiltered = data.filter((persona) => persona[filterBy] === value);
  return arrFiltered;
};

export function filterAll(data, statusValue, speciesValue, genderValue, orderTypeValue, ordenbyValue) {
  tarjetasContainer.innerHTML = "";
  let arrFiltered = data;
  sortData(arrFiltered, orderTypeValue, ordenbyValue);
  if (speciesValue !== "All") {
    arrFiltered = filterData(arrFiltered, "species", speciesValue);
  }
  if (statusValue !== "All") {
    arrFiltered = filterData(arrFiltered, "status", statusValue);
  }
  if (genderValue !== "All") {
    arrFiltered = filterData(arrFiltered, "gender", genderValue);
  }
  renderItems(arrFiltered);
}

export const filter = (ArrayData) => {
  //FILTRO DE ESTATUS
  const listStatus = ArrayData.map((x) => x.status);
  const statusUnicos = listStatus.filter((valor, indice) => {
    return listStatus.indexOf(valor) === indice;
  });

  const selectStatus = document.getElementById("status");
  const dataInfo = document.createElement("option");
  dataInfo.value = "All";
  dataInfo.text = "All";
  selectStatus.appendChild(dataInfo);
  statusUnicos.forEach((unic) => {
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;
    selectStatus.appendChild(newOpcion);
  });

  //FILTROS POR ESPECIES
  const listPecies = ArrayData.map((x) => x.species);
  const unicos = listPecies.filter((valor, indice) => {
    return listPecies.indexOf(valor) === indice;
  });

  const selectSpecias = document.getElementById("species");
  const dataInfoSpecie = document.createElement("option");
  dataInfoSpecie.value = "All";
  dataInfoSpecie.text = "All";
  selectSpecias.appendChild(dataInfoSpecie);
  unicos.forEach((unic) => {
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;

    selectSpecias.appendChild(newOpcion);
  });

  //Filtro por Genero
  const listGenere = ArrayData.map((x) => x.gender);
  const genderUnics = listGenere.filter((valor, indice) => {
    return listGenere.indexOf(valor) === indice;
  });

  const selectGender = document.getElementById("gender");
  const dataInfoGender = document.createElement("option");
  dataInfoGender.value = "All";
  dataInfoGender.text = "All";
  selectGender.appendChild(dataInfoGender);
  genderUnics.forEach((unic) => {
    const newOpcion = document.createElement("option");
    newOpcion.value = unic;
    newOpcion.text = unic;

    selectGender.appendChild(newOpcion);
  });

  // filtros Ascendente y desendente
  const data0 = document.createElement("option");
  data0.label = "Select";

  const selectOrderBy = document.querySelector("select[name='sort-order']");
  const data1 = document.createElement("option");
  data1.value = "asc";
  data1.text = "ASC";

  const data2 = document.createElement("option");
  data2.value = "desc";
  data2.text = "DESC";

  selectOrderBy.appendChild(data0);
  selectOrderBy.appendChild(data1);
  selectOrderBy.appendChild(data2);

  // filtros Ascendente y desendente
  const databy0 = document.createElement("option");
  databy0.label = "Select";

  const selectOrderTypeBy = document.querySelector("select[name='By']");
  const databy1 = document.createElement("option");
  databy1.value = "id";
  databy1.text = "ID";

  const databy2 = document.createElement("option");
  databy2.value = "name";
  databy2.text = "Name";

  selectOrderTypeBy.appendChild(databy0);
  selectOrderTypeBy.appendChild(databy1);
  selectOrderTypeBy.appendChild(databy2);
};

export const computeStats = (arrayData)=>{


  //GRAFICO
  const grafica = document.querySelector("#graficaGender");
  const arrayFemale = filterData(arrayData,"gender","Female").length
  const arrayMale = filterData(arrayData,"gender","Male").length
  const arrayUnknown = filterData(arrayData,"gender","unknown").length

  // eslint-disable-next-line no-undef
  new Chart(grafica,{
    type: 'doughnut',
    data: {
      labels:["Female","Male","Unknown"], 
      datasets: [{
        data:[arrayFemale,arrayMale,arrayUnknown],
        backgroundColor:[
          'rgb(251, 36, 232)',
          'rgb(69,25,255)',
          'rgb(255, 169, 59)',
        ],
        borderColor:'rgb(15, 6, 56)',
      }],
    }
  })


  // GRAFICO 2

  const grafica2 = document.querySelector("#grafica2");
  const alive = filterData(arrayData,"status","Alive").length
  const dead = filterData(arrayData,"status","Dead").length
  const knowliv = filterData(arrayData,"status","unknown").length

  // eslint-disable-next-line no-undef
  new Chart(grafica2,{
    type: 'doughnut',
    data: {
      labels:["Alive","Dead","Unknown"], 
      datasets: [{
        data:[alive,dead,knowliv],
        backgroundColor:[
          'rgb(252, 252, 0)',
          'rgb(158,82,233)',
          'rgb(0, 180, 203)',
        ],
        borderColor:'rgb(15, 6, 56)',
      }]
    }
  })

  // GRAFICO 3

  const grafica3 = document.querySelector("#grafica3");
  const human = filterData(arrayData,"species","Human").length;
  const alien = filterData(arrayData,"species","Alien").length;
  const humanoid = filterData(arrayData,"species","Humanoid").length;
  const knownspecie = filterData(arrayData,"species","unknown").length;
  const poopybutthole = filterData(arrayData,"species","Poopybutthole").length;
  const mytholog = filterData(arrayData,"species","Mytholog").length;
  const Animal = filterData(arrayData,"species","Animal").length;
  const vampire = filterData(arrayData,"species","Vampire").length;
  const robot = filterData(arrayData,"species","Robot").length;
  const cronenberg = filterData(arrayData,"species","Cronenberg").length;
  const disease = filterData(arrayData,"species","Disease").length;
  const parasite = filterData(arrayData,"species","Parasite").length;


  // eslint-disable-next-line no-undef
  new Chart(grafica3,{
    type: 'doughnut',
    data: {
      labels:["Human","Alien","Humanoid","Unknown","Poopybutthole","Mytholog","Animal","Vampire","Robot","cronenberg","Disease","parasite"], 
      datasets: [{
        data:[human,alien,humanoid,knownspecie,poopybutthole,mytholog,Animal,vampire,robot,cronenberg,disease,parasite],
        backgroundColor:[
          'rgb(245, 0, 163)',
          'rgb(69,25,255)',
          'rgb(255,119,5)',
          'rgb(2,20, 100)',
          'rgb(244, 90, 115)',
          'rgb(245,163,1)',
          'rgb(1, 221, 134)',
          'rgb(153, 245, 1)',
          'rgb(163, 0, 245)',
          'rgb(235, 243, 9)',
          'rgb(243, 1, 0)',
          'rgb(60,14,210)',
        ],
        borderColor:'rgb(15, 6, 56)',
        reponsive: true
      }]
    }
  })
}