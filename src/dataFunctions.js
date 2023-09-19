// estas funciones son de ejemplo

export const sortData = (order) => {
  const Datalist = document.getElementById('root');
  const elements = Array.from(Datalist.getElementsByTagName("li"));

  elements.sort(function (a, b) {
    const valorA = parseInt(a.textContent);
    const valorB = parseInt(b.textContent);

    if (order === "ASC") {
      return valorA - valorB;
    } else  {
      return valorB - valorA;
    }
  });

  elements.forEach(function (itemList) {
    Datalist.appendChild(itemList);
  });
};

export const filterInfo = (ArrayData) => {

  function listDataFilter (arraydt){

    // eslint-disable-next-line no-undef
    const nombresUnicos = new Set();
    for (const item of arraydt) {
      nombresUnicos.add(item.gender);
    }
    return Array.from(nombresUnicos);
  }
  
  const filtesList = listDataFilter(ArrayData);

  const select = document.querySelector("select[name='data']");
  

  filtesList.forEach(element => {

    const newOpcion = document.createElement("option");
    newOpcion.value = element;
    newOpcion.text = element;
    select.appendChild(newOpcion);
    
  });
  
};


