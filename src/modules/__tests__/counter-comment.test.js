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
