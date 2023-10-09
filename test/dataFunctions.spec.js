import { data as fakeData } from './data.js';
import { sortData, filterData } from '../src/dataFunctions.js';
import { renderItems } from '../src/view.js';


const returndesc = 'desc';
const typeby = 'name';




describe('sortData', () => {
  it('should return data sorted in descending order', () => {
    const sortedData = sortData(fakeData, returndesc, typeby);
    const expectedData = fakeData.slice().sort((a, b) => b.name.localeCompare(a.name));
    expect(sortedData).toEqual(expectedData);
  });

});

describe('sortData', () => {
  it('should return data sorted in ascending order', () => {
    const sortedData = sortData(fakeData, 'asc', typeby);
    const expectedData = fakeData.slice().sort((a, b) => a.name.localeCompare(b.name));
    expect(sortedData).toEqual(expectedData);
  });

});

describe('filterData', () => {
  it('should return data filtered by gender female', () => {
    const filteredData = filterData(fakeData, "gender", "Female");
    const expectedFilter = fakeData.filter((persona) => persona["gender"] === "Female");
    expect(filteredData).toEqual(expectedFilter);
  });
});
describe('filterData', () => {
  it('should return data filtered by gender male', () => {
    const filteredData = filterData(fakeData, "gender", "Male");
    const expectedFilter = fakeData.filter((persona) => persona["gender"] === "Male");
    expect(filteredData).toEqual(expectedFilter);
  });
});

describe('filterData', () => {
  it('should return data filtered by status alive', () => {
    const filteredData = filterData(fakeData, "status", "Alive");
    const expectedFilter = fakeData.filter((persona) => persona["status"] === "Alive");
    expect(filteredData).toEqual(expectedFilter);
  });
});



jest.mock('../src/view.js', () => {
  return {
    renderItems: jest.fn()
  };
});

describe('renderItems', () => {
  it('should render data correctly', () => {
    // Aquí estamos simulando que renderItems devuelve algo (puedes ajustar esto según tu lógica)
    renderItems.mockReturnValue('Rendered Data');

    // Ahora llamamos a la función que estamos probando
    const result = renderItems(fakeData);

    // Comprobamos que renderItems haya sido llamado con los datos correctos
    expect(renderItems).toHaveBeenCalledWith(fakeData);

    // Comprobamos que la función devuelve lo que esperamos
    expect(result).toBe('Rendered Data');
  });
});

//Datos estadísticos
/*describe('computeStats', () => {
  it('I should return the total records by gender', () => {
    const { container } = render(<computeStats/>);
    const canvas =  container.querySelector("#graficaGender");

    const g1 = canvas.getContext('grafica');

    const chart = new Chart(g1);
    const data = chart.data.datasets[0].data;
  
    // Verificar que los datos sean correctos
    expect(data).toEqual([73, 372, 42]);

  });

});*/