import { data as fakeData } from './data.js';
import { sortData } from '../src/dataFunctions.js';

const returndesc = 'desc';
const typeby = 'name';
//console.log(fakeData);
describe('sortData', () => {
  describe('se espera que los elementos sean ordenados de forma ascendente', ()=>{
    expect(sortData(fakeData,returndesc,typeby)).toBe(fakeData.reverse());
  });
  describe('se espera que los elementos sean ordenados de forma descendente',()=>{

  });
  describe('se espera que los elementos sean ordenados mediante la id de manera ascendente',()=>{});
  /*it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});


/*
describe('filter data', () => {
  const filtros = filterData(fakeData, "status", "AlL");
  expect(filtros).toBe(fakeData);


});*/
