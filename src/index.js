/* eslint-disable no-await-in-loop */

import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { addPopUp, pokedex } from './modules/comments-popup.js';
import { addComment } from './modules/add-comment.js';

async function getPokemon() {
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    await pokemonCard(id);
  }
  addPopUp();
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('id');
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  // console.log(id.value, name.value, comment.value);
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
