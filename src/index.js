import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
/* eslint-disable no-await-in-loop */

const pokedex = 157;

async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    pokemonCard(id);
  }
}

getPokemon();