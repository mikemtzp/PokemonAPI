import display from './display';

const url = 'https://pokeapi.co/api/v2/pokemon/';

async function pokemonCard(id, like) {
  const response = await fetch(url + id, {
    method: 'GET',
    header: { 'content-type': 'application/json; charset: UTF-8' },
  });

  const pokemon = await response.json();
  display(pokemon, like);
}
export default pokemonCard;