class Counter {
  constructor(data) {
    this.data = data;
  }

    counter = (pokedex) => {
      const array = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard'];
      let count = 0;
      while (array.length > count) {
        pokedex[count] = array[count];
        count += 1;
      }
      return pokedex;
    };
}
module.exports = Counter;