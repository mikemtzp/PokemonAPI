/* eslint-disable no-await-in-loop */

import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { generatePopUp } from './modules/comments-popup.js';

const pokedex = 10;

async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    await pokemonCard(id);
  }
  const commentsBtn = document.querySelectorAll('.comments-btn');
  commentsBtn.forEach((e) => {
    e.addEventListener('click', generatePopUp);
  });
}

getPokemon();
