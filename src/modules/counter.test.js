jest.mock('./likeCount.js');
const Counter = require('./__mocks__/counter.js');

const counter = new Counter();
const pokedex = [];

test('increases count by 1', () => {
  expect(counter.counter(pokedex)).toStrictEqual(['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard']);
});