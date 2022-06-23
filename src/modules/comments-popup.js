import { getComments } from './add-comment.js';

const url = 'https://pokeapi.co/api/v2/pokemon/';
const pokedex = 10;

const createPopUp = (pokemon) => {
  document.getElementById('pokemon-image').src = pokemon.sprites.front_default;
  document.getElementById('pokemon-name').innerHTML = pokemon.name;
  document.getElementById('pokemon-data').innerHTML = `<p>Base experience: ${pokemon.base_experience}</p>
  <p>Height: ${pokemon.height}</p>
  <p>Weight: ${pokemon.weight}</p>`;
  document.getElementById('id').value = pokemon.id;
  getComments(pokemon.id);
  document.getElementById('popup-window').style.display = 'block';
};

const populatePopUp = async (id) => {
  const response = await fetch(url + id, {
    method: 'GET',
    header: {
      'content-type': 'application/json; charset: UTF-8',
    },
  });
  const pokemon = await response.json();
  createPopUp(pokemon);
};

const generatePopUp = (e) => {
  for (let i = 1; i <= pokedex; i += 1) {
    const id = [i];
    if (e.target.id === `comm${id}`) {
      populatePopUp(id);
    }
  }
};

const addPopUp = () => {
  const commentsBtn = document.querySelectorAll('.comments-btn');
  commentsBtn.forEach((e) => {
    e.addEventListener('click', generatePopUp);
  });
};

export { createPopUp, addPopUp, pokedex };
