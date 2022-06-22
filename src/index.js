/* eslint-disable no-await-in-loop */

import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { addPopUp } from './modules/comments-popup.js';

const pokedex = 10;

async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    await pokemonCard(id);
  }
  addPopUp();
}

getPokemon();
