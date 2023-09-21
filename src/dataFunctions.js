// estas funciones son de ejempl

// function sortData(data, sortBy, sortOrder) {}
// function computeStats(data){}


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


