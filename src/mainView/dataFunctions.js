export const sortData = (data, orderTypeValue, ordenbyValue) => {
  
  if (ordenbyValue === "Id") {
    data.sort((a, b) => {
      if (orderTypeValue === "ASC") {
        return a.id - b.id;
      } else if (orderTypeValue === "DESC") {
        return b.id - a.id;
      }
    });
  }
  if (ordenbyValue === "Name") {
    data.sort((a, b) => {
      const valorA = a.name.toLowerCase();
      const valorB = b.name.toLowerCase();
      const compare = valorA.localeCompare(valorB);
      return orderTypeValue === "ASC" ? compare : -compare;
    });
  }
  data.sort((a, b) => {
    if (ordenbyValue === "") {
      return a.id - b.id;
    }
  });
  return data;
};

export const filterData = (data, filterBy, value) => {
  if (value === "All") {
    return data;
  }
  const arrFiltered = data.filter((persona) => persona[filterBy] === value);
  return arrFiltered;
};

export function filterAll(data, statusValue, speciesValue, genderValue, orderTypeValue, ordenbyValue) {
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
  return arrFiltered
}

export const renderFilters = (ArrayData) => {
  const listStatus = ArrayData.map((x) => x.status);
  const listStatusUniques =  listStatus.filter((valor, indice) => {
    return listStatus.indexOf(valor) === indice;
  });
  const listSpecies = ArrayData.map((x) => x.species);
  const listSpeciesUniques = listSpecies.filter((valor, indice) => {
    return listSpecies.indexOf(valor) === indice;
  });
  const listGenders = ArrayData.map((x) => x.gender);
  const listGendersUniques = listGenders.filter((valor, indice) => {
    return listGenders.indexOf(valor) === indice;
  });

  const AllFilters = [ listStatusUniques, listSpeciesUniques, listGendersUniques]
  return AllFilters
}

export const computeStats = (arrayData)=>{
  const graficGender = document.querySelector("#graficGender");
  const arrayFemale = filterData(arrayData,"gender","Female").length
  const arrayMale = filterData(arrayData,"gender","Male").length
  const arrayUnknown = filterData(arrayData,"gender","unknown").length
  // eslint-disable-next-line no-undef
  new Chart(graficGender,{
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

  const graficStatus = document.querySelector("#graficStatus");
  const alive = filterData(arrayData,"status","Alive").length
  const dead = filterData(arrayData,"status","Dead").length
  const knowliv = filterData(arrayData,"status","unknown").length
  // eslint-disable-next-line no-undef
  new Chart(graficStatus,{
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

  const graficSpecies = document.querySelector("#graficSpecies");
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
  new Chart(graficSpecies,{
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
