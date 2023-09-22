
export const renderItems = (arr) => {
  //  elemento contenedor de tarjetas
  const tarjetasContainer = document.getElementById("root");
  //ELemento Ul para Li
  const ulElement = document.createElement('ul');
  ulElement.className += "ulTarget";
  
  arr.forEach((character) => {
    // Elemento de tarjeta 
    const tarjeta = document.createElement('li');
    tarjeta.classList.add('card'); // Puedes agregar estilos CSS aquí si lo deseas
    tarjeta.setAttribute("itemtype", "cardLi")
    //Elemento de imagen
    const imageCharacter = document.createElement('img');
    imageCharacter.className += "photo";
    imageCharacter.setAttribute("itemprop", "image")
    imageCharacter.src = character.image;
    imageCharacter.alt = `Foto de ${character.name}`;
    // Elemento nombre
    const nameCharacter = document.createElement('p');
    nameCharacter.textContent = `Nombre: ${character.name}`;
    nameCharacter.setAttribute("itemprop", "name")
    // Elemento especie
    const specieCharacter = document.createElement('p');
    specieCharacter.setAttribute("itemprop", "species")
    specieCharacter.textContent = `Especie: ${character.species}`;
    //Elemento boton
    const buttonCharacter = document.createElement('button');
    buttonCharacter.textContent = `Ver mas`
    buttonCharacter.addEventListener("click", function() {
    //  console.log(character.id)
      localStorage.setItem("character", JSON.stringify(character))
      //JSON.parse
      window.location.href= "detalle.html"
    } )
    // Se agrega elementos nombre, especie e imagen a la tarjeta
    tarjeta.appendChild(imageCharacter);
    tarjeta.appendChild(nameCharacter);
    tarjeta.appendChild(specieCharacter);
    tarjeta.appendChild(buttonCharacter);
    //Se agrega tarjeta al contenedor Ul
    ulElement.appendChild(tarjeta);
    // Se agrega ul al contenedor principal
    tarjetasContainer.appendChild(ulElement)
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



