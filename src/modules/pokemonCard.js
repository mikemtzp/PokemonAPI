import { display } from './display.js';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonCard = async (id) => {
  const response = await fetch(url + id, {
    method: 'GET',
    header: { 'content-type': 'application/json; charset: UTF-8' },
  });

  const pokemon = await response.json();
  display(pokemon);
};

export default pokemonCard;
