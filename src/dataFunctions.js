
export const sortData = (data,ordenbyValue ,orderTypeValue) => {
 
  if(ordenbyValue === 'id'){

    data.sort((a, b) => {

      const valorA = parseInt(a.id);
      const valorB = parseInt(b.id);

      if ((orderTypeValue === "ASC") && (valorA > valorB)) {
        return valorA - valorB;
      } else if((orderTypeValue === "DESC") && (valorA < valorB)){
        return valorB - valorA;
      }
      
     
    });
    
   
  }else if (ordenbyValue === 'name'){

    data.sort((a, b) => {

      const valorA = a.name.toLowerCase();
      const valorB = b.name.toLowerCase();

      const compare = valorA.localeCompare(valorB); 
      return orderTypeValue === "ASC" ? compare : -compare;

    });

  }

  return data;
};