/* eslint-disable no-await-in-loop */

import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { addPopUp, pokedex } from './modules/comments-popup.js';
import { addComment } from './modules/add-comment.js';
import { getLikes } from './modules/add-likes.js';
import pokemonCounter from './modules/counter-items.js';
import { loadLikeBtn } from './modules/display.js';

async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    await pokemonCard(id);
  }
  addPopUp();
  setTimeout(loadLikeBtn(), 2000);
  setTimeout(getLikes(), 2000);
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('id');
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  addComment(id.value, name.value, comment.value);
  name.value = '';
  comment.value = '';
});

const popup = document.getElementById('popup-window');
const close = document.querySelectorAll('.closebtn');
close.forEach((e) => {
  e.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

getPokemon();

pokemonCounter(pokedex);