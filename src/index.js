import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { getLikeCount } from './modules/involvementApi';
import pokemonCard from './modules/pokemonCard.js';
import { addlikes, pokedex } from './modules/likeCount.js';
import count from './modules/counter';
/* eslint-disable no-await-in-loop */

const getPokemon = async () => {
  count();
  const likes = await getLikeCount();
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    await pokemonCard(id, likes[i]);
  }

  addlikes();
};

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
async function addL() {
  const response = await fetch(url, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

  });
  const addedLike = await response.text();

  console.log(JSON.parse(addedLike));

  return addedLike;
}
addL();
getPokemon();
