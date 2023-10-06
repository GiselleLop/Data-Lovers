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
  return data
  // renderItems(data);
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

