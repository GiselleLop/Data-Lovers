import { filterData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);
/*
describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
//////////
describe('filter data', () => {
  const filtros = filterData(fakeData, "status", "AlL");
  expect(filtros).toBe(fakeData);

/*
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });*/
});
