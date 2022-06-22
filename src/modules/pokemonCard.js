import display from './display';

const url = 'https://pokeapi.co/api/v2/pokemon/';

async function pokemonCard(id) {
  const response = await fetch(url + id, {
    method: 'GET',
    header: { 'content-type': 'application/json; charset: UTF-8' },
  });

  const pokemon = await response.json();

  console.log(pokemon);
  display(pokemon);
  // console.log(id + ' ' + pokemon.name);
}
export default pokemonCard;