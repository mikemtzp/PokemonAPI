import Counter from '../__mocks__/counter.js';

jest.mock('../add-comment.js');

const counter = new Counter();
const ratatat = [];
const pikachu = [{ item_id: 1, username: 'Mike', comment: 'Hello!' }];
const mew = [
  { item_id: 1, username: 'Mike', comment: 'Hello there!' },
  { item_id: 2, username: 'Spencer', comment: 'Thank God it\'s Friday' },
];

describe('Test counter for comment popup', () => {
  test('Pokemon item contains 1 comment', () => {
    expect(counter.commentsCounter(pikachu)).toBe(1);
  });

  test('Pokemon item is empty', () => {
    expect(counter.commentsCounter(ratatat)).toBeFalsy();
  });

  test('Pokemon item contains 3 comments', () => {
    const articuno = { item_id: 78, username: 'Ash', comment: 'Got ya!' };
    const mewtwo = [...mew, articuno];
    expect(counter.commentsCounter(mewtwo)).toBe(3);
  });
});

const nullData = [];
const data = [
  { id: 1, name: 'ditto', ability: 'copy' },
  { id: 2, name: 'articuno', ability: 'ice-beam' },
  { id: 3, name: 'moltres', ability: 'fireblast' },
  { id: 4, name: 'zapdos', ability: 'thunderbolt' },
];

describe('Test for items counter', () => {
  test('Page contains 2 pokemon', () => {
    expect(counter.pokemonCounter(data)).toBe(4);
  });
  test('Page contains 0 pokemons', () => {
    expect(counter.pokemonCounter(nullData)).toBe(null);
  });
});
