import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
import { addlikes, pokedex } from './modules/likeCount.js';
/* eslint-disable no-await-in-loop */





const getPokemon = async () =>{
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
   await pokemonCard(id);
  }

  addlikes()
  
}

getPokemon();


