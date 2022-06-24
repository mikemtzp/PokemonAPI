const pokemonCounter = (pokemons) => {
  document.getElementById('pokedex-counter').innerHTML = `(${pokemons - 1})`;
};

export default pokemonCounter;